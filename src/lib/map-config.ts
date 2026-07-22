import { DbMapMarker } from '@/backend/types/database';

export interface MapMarkerViewModel {
  id: string;
  locationId: string;
  x: number;          // maps to longitude
  y: number;          // maps to latitude
  zoomMin: number;    // derived from zoomLevel
  zoomMax: number;
  rotation?: number;
  layer: string;      // maps to markerType
  isHidden: boolean;  // maps to status
  label: string;
}

export const MAP_IMAGE_PROVIDER = {
  name: 'GTA VI Custom Raster Map',
  imageUrl: '/images/GTA_6_MAp.webp',
  // Extent bounds matching MapLibre standard raster projection mapping
  bounds: [
    [-180, 85], // Top-Left [lng, lat]
    [180, -85]  // Bottom-Right [lng, lat]
  ] as [[number, number], [number, number]],
  defaultCenter: [0, 0] as [number, number],
  defaultZoom: -0.5,
  minZoom: -3,
  maxZoom: 5,
};

/**
 * Transforms a raw database map marker to the view contract format
 * supporting x/y coordinates and zoom thresholds.
 */
export function mapDbMarkerToViewModel(marker: DbMapMarker, locationName: string): MapMarkerViewModel {
  return {
    id: marker.id,
    locationId: marker.locationId,
    x: marker.longitude, // x axis maps to longitude
    y: marker.latitude,  // y axis maps to latitude
    zoomMin: marker.zoomLevel || 0,
    zoomMax: 5, // Max map zoom index
    rotation: 0,
    layer: marker.markerType || 'general',
    isHidden: marker.status === 'draft',
    label: locationName,
  };
}
