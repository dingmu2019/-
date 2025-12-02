import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'en' | 'zh';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    mech_era: "Era 1: Mechanical",
    mech_title: "The Machine",
    desktop_era: "Era 2: Desktop Computing",
    desktop_sub: "MS-DOS Version 6.22",
    desktop_cmd: "COMMAND PROMPT",
    desktop_typing: "C:> RUN EVOLUTION.EXE...\nLOADING KERNEL...\nINITIALIZING INTERFACE...\nDESKTOP ENVIRONMENT LOADED.\nREADY_",
    touch_era: "Era 3: Touch Interface",
    touch_title: "Fluidity.",
    touch_card: "Swipe to unlock the world.",
    
    // Split Section 4
    voice_era: "Era 4: Generative Voice",
    voice_title: "Conversational AI",
    voice_sub: "Natural Language Processing initialized.",
    
    vision_era: "Era 5: Spatial Vision",
    vision_title: "Augmented Reality",
    vision_sub: "Analyzing environment...",
    vision_obj_1: "Person 98%",
    vision_obj_2: "Coffee Cup 95%",
    vision_obj_3: "Laptop 99%",

    // Renumbered Sections
    bci_era: "Era 6: BCI & Smart Wearables",
    bci_title: "Neural Symbiosis",
    bci_sub: "The suit knows what you think before you do.",
    
    future_era: "Era 7: Manifestation",
    future_imagining: "Imagining:",
    future_generated: "World Generated Successfully.",
    theme_forest: "Forest",
    theme_ocean: "Ocean",
    theme_fire: "Fire",
    theme_space: "Cosmos"
  },
  zh: {
    mech_era: "时代 1：机械时代",
    mech_title: "机械巨兽",
    desktop_era: "时代 2：桌面计算",
    desktop_sub: "MS-DOS 版本 6.22",
    desktop_cmd: "命令提示符",
    desktop_typing: "C:> 运行 进化.EXE...\n正在加载内核...\n初始化界面...\n桌面环境已加载。\n就绪_",
    touch_era: "时代 3：触控交互",
    touch_title: "流畅体验",
    touch_card: "滑动解锁新世界",
    
    // Split Section 4
    voice_era: "时代 4：生成式语音",
    voice_title: "对话式人工智能",
    voice_sub: "自然语言处理已启动。",
    
    vision_era: "时代 5：空间视觉",
    vision_title: "增强现实",
    vision_sub: "正在分析环境...",
    vision_obj_1: "人物 98%",
    vision_obj_2: "咖啡杯 95%",
    vision_obj_3: "笔记本电脑 99%",

    // Renumbered Sections
    bci_era: "时代 6：意念交互与智能穿戴",
    bci_title: "脑机接口 & 纳米战衣",
    bci_sub: "如同第二层皮肤，随心而动。",
    
    future_era: "时代 7：显化",
    future_imagining: "正在构想：",
    future_generated: "世界构建完成。",
    theme_forest: "森林",
    theme_ocean: "海洋",
    theme_fire: "火焰",
    theme_space: "宇宙"
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('zh');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'zh' : 'en');
  };

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};