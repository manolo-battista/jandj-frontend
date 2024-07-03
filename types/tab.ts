type ITabButton = {
  title: string;
  isActive: boolean;
  onClick: () => void;
};

type ITabContent = {
  content: React.ReactNode;
};

export type { ITabButton, ITabContent };
