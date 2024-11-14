export interface ISizeLgProps {
  size?: "lg" | "sm";
  className?: string;
}

export interface WhiskeyOverview {
  whiskeyId: string;
  whiskeyName: string;
  whiskeyThumbnailImage: string;
}

export interface WhiskeyInfo {
  whiskeyId: string;
  whiskeyType: string;
  whiskeyName: string;
  whiskeyVolume: string;
  whiskeyAbv: string;
  whiskeyNation: string;
  whiskeyAroma: string;
  whiskeyTaste: string;
  whiskeyFinish: string;
  whiskeyThumbnailImage: string;
  whiskeyBgImage: string;
}
