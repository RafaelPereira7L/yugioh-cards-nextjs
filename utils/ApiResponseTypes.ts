interface CardInfos {
  id: number;
  archetype?: string;
  level?: number;
  race: string;
  name: string;
  type: string;
  desc: string;
  atk?: number;
  def?: number;
  attribute?: string;
  card_images: CardImg[];
}

interface CardImg {
  id: number;
  image_url: string;
}

export type ApiResponse = CardInfos;
