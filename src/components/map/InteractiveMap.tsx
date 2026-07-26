'use client';

import { useEffect, useRef, useState } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { MapMarkerViewModel } from '../../lib/map-config';

interface InteractiveMapProps {
  markers: MapMarkerViewModel[];
  selectedId: string | null;
  onSelect: (id: string | null) => void;
}

export default function InteractiveMap({ markers, selectedId, onSelect }: InteractiveMapProps) {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<maplibregl.Map | null>(null);
  const popupRef = useRef<maplibregl.Popup | null>(null);
  
  // React Ref to avoid stale closure scopes inside MapLibre event handlers
  const markersRef = useRef<MapMarkerViewModel[]>(markers);
  useEffect(() => {
    markersRef.current = markers;
  }, [markers]);

  // Sliced Raster Tile Source Configuration
  const mapStyle: maplibregl.StyleSpecification = {
    version: 8,
    glyphs: 'https://demotiles.maplibre.org/font/{fontstack}/{range}.pbf',
    sources: {
      'gta-tiles-source': {
        type: 'raster',
        tiles: ['/tiles/{z}/{x}/{y}.png'],
        tileSize: 256,
        maxzoom: 3,
        attribution: 'Map &copy; GTAVISPOT',
      },
    },
    layers: [
      {
        id: 'background-color-layer',
        type: 'background',
        paint: {
          'background-color': '#0d0e12',
        },
      },
      {
        id: 'raster-map-layer',
        type: 'raster',
        source: 'gta-tiles-source',
        paint: {
          'raster-fade-duration': 200,
        },
      },
    ],
  };

  // GeoJSON Converter (reads from the up-to-date Ref)
  const getGeoJsonData = (): any => {
    return {
      type: 'FeatureCollection',
      features: markersRef.current.map((m) => ({
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [m.x, m.y],
        },
        properties: {
          id: m.id,
          label: m.label,
          layer: m.layer,
          zoomMin: m.zoomMin,
          zoomMax: m.zoomMax,
        },
      })),
    };
  };

  // Initialize Map
  useEffect(() => {
    if (!mapContainerRef.current) return;

    console.log('🗺️ MapLibre initializing. Markers count:', markersRef.current.length, markersRef.current);

    const map = new maplibregl.Map({
      container: mapContainerRef.current,
      style: mapStyle,
      center: [0, 0],
      zoom: -0.5, // Zoom out default to show the whole island
      minZoom: -3, // Allow zooming out much further
      maxZoom: 5,
      dragRotate: false,
      pitchWithRotate: false,
      keyboard: true,
      doubleClickZoom: true,
      renderWorldCopies: false, // Ensure single image render
    });

    mapRef.current = map;

    // Standard Zoom and Fullscreen controls
    map.addControl(new maplibregl.NavigationControl({ showCompass: false }), 'bottom-right');
    map.addControl(new maplibregl.FullscreenControl(), 'bottom-right');

    map.on('load', () => {
      // Add markers GeoJSON source
      map.addSource('markers-source', {
        type: 'geojson',
        data: getGeoJsonData(),
        cluster: true,
        clusterMaxZoom: 4,
        clusterRadius: 50,
      });

      // Cluster Circle Layer
      map.addLayer({
        id: 'clusters-layer',
        type: 'circle',
        source: 'markers-source',
        filter: ['has', 'point_count'],
        paint: {
          'circle-color': [
            'step',
            ['get', 'point_count'],
            '#ec4899', // Pink
            10,
            '#f97316', // Orange
            30,
            '#eab308', // Yellow
          ],
          'circle-radius': [
            'step',
            ['get', 'point_count'],
            18,
            10,
            24,
            30,
            30,
          ],
          'circle-stroke-width': 2,
          'circle-stroke-color': '#ffffff',
        },
      });

      // Cluster Labels Layer
      map.addLayer({
        id: 'cluster-counts-layer',
        type: 'symbol',
        source: 'markers-source',
        filter: ['has', 'point_count'],
        layout: {
          'text-field': '{point_count}',
          'text-font': ['Open Sans Regular'],
          'text-size': 12,
        },
        paint: {
          'text-color': '#ffffff',
        },
      });

      // Individual points layer
      map.addLayer({
        id: 'unclustered-markers-layer',
        type: 'circle',
        source: 'markers-source',
        filter: ['!', ['has', 'point_count']],
        paint: {
          'circle-color': [
            'match',
            ['get', 'layer'],
            'location', '#3b82f6',
            'character', '#ec4899',
            'collectibles', '#10b981',
            'stunts', '#f97316',
            'shop', '#eab308',
            '#a855f7',
          ],
          'circle-radius': 8,
          'circle-stroke-width': 1.5,
          'circle-stroke-color': '#ffffff',
        },
      });

      // Click clusters behavior
      map.on('click', 'clusters-layer', (e) => {
        const features = map.queryRenderedFeatures(e.point, { layers: ['clusters-layer'] });
        const clusterId = features[0].properties.cluster_id;
        const source = map.getSource('markers-source') as maplibregl.GeoJSONSource;

        source.getClusterExpansionZoom(clusterId).then((zoom) => {
          const coordinates = (features[0].geometry as any).coordinates;
          map.easeTo({
            center: coordinates,
            zoom: zoom + 0.5,
          });
        });
      });

      // Click individual marker behavior
      map.on('click', 'unclustered-markers-layer', (e) => {
        const features = map.queryRenderedFeatures(e.point, { layers: ['unclustered-markers-layer'] });
        const props = features[0].properties;
        const coordinates = (features[0].geometry as any).coordinates;

        onSelect(props.id);

        if (popupRef.current) popupRef.current.remove();

        const popup = new maplibregl.Popup({ closeButton: false, className: 'custom-popup' })
          .setLngLat(coordinates)
          .setHTML(`
            <div style="background-color: #161920; color: white; padding: 10px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1); font-family: sans-serif;">
              <span style="font-weight: bold; font-size: 14px; display: block; margin-bottom: 2px;">${props.label}</span>
              <span style="font-size: 10px; color: #a855f7; text-transform: uppercase; letter-spacing: 0.5px; display: block; margin-bottom: 6px;">${props.layer}</span>
              <span style="font-size: 11px; color: #9ca3af; display: block;">Click to inspect details</span>
            </div>
          `)
          .addTo(map);

        popupRef.current = popup;
      });

      // Cursor hover states
      map.on('mouseenter', 'unclustered-markers-layer', () => { map.getCanvas().style.cursor = 'pointer'; });
      map.on('mouseleave', 'unclustered-markers-layer', () => { map.getCanvas().style.cursor = ''; });
      map.on('mouseenter', 'clusters-layer', () => { map.getCanvas().style.cursor = 'pointer'; });
      map.on('mouseleave', 'clusters-layer', () => { map.getCanvas().style.cursor = ''; });
    });

    return () => {
      map.remove();
    };
  }, []);

  // Update markers GeoJSON data reactively
  useEffect(() => {
    if (!mapRef.current) return;
    const map = mapRef.current;

    const updateSource = () => {
      const source = map.getSource('markers-source') as maplibregl.GeoJSONSource;
      if (source) {
        source.setData(getGeoJsonData());
      }
    };

    if (map.isStyleLoaded()) {
      updateSource();
    } else {
      map.once('idle', updateSource);
    }
  }, [markers]);

  // Center selected marker on changes
  useEffect(() => {
    if (!mapRef.current || !selectedId) return;
    const selected = markers.find((m) => m.id === selectedId);
    if (selected) {
      mapRef.current.flyTo({
        center: [selected.x, selected.y],
        zoom: Math.max(mapRef.current.getZoom(), 3),
        speed: 1.2,
      });
    }
  }, [selectedId, markers]);

  return <div ref={mapContainerRef} className="h-full w-full" />;
}
