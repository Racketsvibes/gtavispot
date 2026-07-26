import { mediaRepository } from '../repositories/media.repository';
import { MediaCollectionV1 } from './page-contracts';

export class MediaApplication {
  /**
   * Compiles structured lists of media assets categorized by roles and release dates.
   */
  async mediaCollections(): Promise<MediaCollectionV1> {
    const allMedia = await mediaRepository.findAll();

    const artwork = allMedia.filter(m => m.mediaType === 'artwork');
    const wallpapers = allMedia.filter(m => m.mediaType === 'wallpaper');
    const screenshots = allMedia.filter(m => m.mediaType === 'screenshot');
    const coverArt = allMedia.filter(m => 
      m.title?.toLowerCase().includes('cover') || 
      m.slug.toLowerCase().includes('cover')
    );
    const featured = allMedia.filter(m => m.status === 'official').slice(0, 10);
    const latest = [...allMedia]
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      .slice(0, 15);

    return {
      version: 'v1',
      artwork,
      wallpapers,
      screenshots,
      coverArt,
      featured,
      latest,
    };
  }
}

export const mediaApplication = new MediaApplication();
