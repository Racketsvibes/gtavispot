import { DbMedia } from '../types/database';

export class MediaManager {
  /**
   * Retrieves the primary hero image from a list of media.
   */
  static getHeroMedia(mediaList: DbMedia[]): DbMedia | null {
    // Prioritizes artwork first, then screenshot, then standard image
    const hero = mediaList.find(m => m.mediaType === 'artwork') ||
                 mediaList.find(m => m.mediaType === 'screenshot') ||
                 mediaList.find(m => m.mediaType === 'image');
    return hero || null;
  }

  /**
   * Retrieves all screenshot assets.
   */
  static getGallery(mediaList: DbMedia[]): DbMedia[] {
    return mediaList.filter(m => m.mediaType === 'screenshot');
  }

  /**
   * Retrieves all thumbnail assets.
   */
  static getThumbnails(mediaList: DbMedia[]): DbMedia[] {
    return mediaList.filter(m => m.mediaType === 'thumbnail');
  }

  /**
   * Retrieves all artwork assets.
   */
  static getArtworks(mediaList: DbMedia[]): DbMedia[] {
    return mediaList.filter(m => m.mediaType === 'artwork');
  }

  /**
   * Retrieves all wallpaper assets.
   */
  static getWallpapers(mediaList: DbMedia[]): DbMedia[] {
    return mediaList.filter(m => m.mediaType === 'wallpaper');
  }
}
