import React, { createContext, useContext, useState, useEffect } from 'react';

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const translations = {
  it: {
    // Navigation
    home: "Home",
    calendar: "Calendario", 
    booking: "Spazio Compiti",
    leaderboard: "Classifiche",
    qrScanner: "QR Scanner",
    profile: "Profilo",
    centerName: "Centro Giovani",
    centerTagline: "La tua app di riferimento",
    menu: "Menu",
    
    // Dashboard
    welcome: "Ciao",
    welcomeSubtitle: "Benvenuto nel tuo centro giovani digitale",
    level: "Livello",
    points: "punti",
    progressToLevel: "Progresso verso il livello",
    pointsMissing: "punti mancanti",
    upcomingAppointments: "Prossimi Appuntamenti",
    yourPoints: "I tuoi punti",
    totalPointsEarned: "Punti totali guadagnati",
    pointsToNextLevel: "punti al prossimo livello",
    yourStats: "Le tue statistiche",
    activitiesWeek: "Attività settimana",
    studyHours: "Ore studio",
    recentActivities: "Attività recenti",
    weeklyGoals: "Obiettivi settimanali",
    centerNews: "Novità dal centro",
    
    // Quick Actions
    bookStudySpace: "Prenota Spazio Compiti",
    viewCalendar: "Vedi Calendario",
    scanQR: "Scansiona QR",
    leaderboards: "Classifiche",
    
    // Profile
    editProfile: "Modifica Profilo",
    badges: "Badge",
    achievements: "Obiettivi raggiunti",
    settings: "Impostazioni",
    logout: "Disconnetti",
    language: "Lingua",
    theme: "Tema",
    darkTheme: "Tema scuro",
    lightTheme: "Tema chiaro",
    
    // Common
    confirmed: "Confermato",
    pending: "In attesa",
    save: "Salva",
    cancel: "Annulla",
    loading: "Caricamento...",
    error: "Errore",
    success: "Successo"
  },
  
  en: {
    // Navigation
    home: "Home",
    calendar: "Calendar",
    booking: "Study Space",
    leaderboard: "Leaderboards",
    qrScanner: "QR Scanner", 
    profile: "Profile",
    centerName: "Youth Center",
    centerTagline: "Your reference app",
    menu: "Menu",
    
    // Dashboard
    welcome: "Hello",
    welcomeSubtitle: "Welcome to your digital youth center",
    level: "Level",
    points: "points",
    progressToLevel: "Progress to level",
    pointsMissing: "points missing",
    upcomingAppointments: "Upcoming Appointments",
    yourPoints: "Your Points",
    totalPointsEarned: "Total points earned",
    pointsToNextLevel: "points to next level",
    yourStats: "Your Stats",
    activitiesWeek: "Activities this week",
    studyHours: "Study hours",
    recentActivities: "Recent Activities",
    weeklyGoals: "Weekly Goals",
    centerNews: "Center News",
    
    // Quick Actions
    bookStudySpace: "Book Study Space",
    viewCalendar: "View Calendar",
    scanQR: "Scan QR",
    leaderboards: "Leaderboards",
    
    // Profile
    editProfile: "Edit Profile",
    badges: "Badges",
    achievements: "Achievements",
    settings: "Settings",
    logout: "Logout",
    language: "Language",
    theme: "Theme",
    darkTheme: "Dark theme",
    lightTheme: "Light theme",
    
    // Common
    confirmed: "Confirmed",
    pending: "Pending",
    save: "Save",
    cancel: "Cancel",
    loading: "Loading...",
    error: "Error",
    success: "Success"
  },
  
  es: {
    // Navigation
    home: "Inicio",
    calendar: "Calendario",
    booking: "Espacio de Estudio",
    leaderboard: "Clasificaciones",
    qrScanner: "Escáner QR",
    profile: "Perfil",
    centerName: "Centro Juvenil",
    centerTagline: "Tu app de referencia",
    menu: "Menú",
    
    // Dashboard
    welcome: "Hola",
    welcomeSubtitle: "Bienvenido a tu centro juvenil digital",
    level: "Nivel",
    points: "puntos",
    progressToLevel: "Progreso al nivel",
    pointsMissing: "puntos faltantes",
    upcomingAppointments: "Próximas Citas",
    yourPoints: "Tus Puntos",
    totalPointsEarned: "Puntos totales ganados",
    pointsToNextLevel: "puntos al siguiente nivel",
    yourStats: "Tus Estadísticas",
    activitiesWeek: "Actividades esta semana",
    studyHours: "Horas de estudio",
    recentActivities: "Actividades Recientes",
    weeklyGoals: "Objetivos Semanales",
    centerNews: "Noticias del Centro",
    
    // Quick Actions
    bookStudySpace: "Reservar Espacio de Estudio",
    viewCalendar: "Ver Calendario",
    scanQR: "Escanear QR",
    leaderboards: "Clasificaciones",
    
    // Profile
    editProfile: "Editar Perfil",
    badges: "Insignias",
    achievements: "Logros",
    settings: "Configuración",
    logout: "Cerrar Sesión",
    language: "Idioma",
    theme: "Tema",
    darkTheme: "Tema oscuro",
    lightTheme: "Tema claro",
    
    // Common
    confirmed: "Confirmado",
    pending: "Pendiente",
    save: "Guardar",
    cancel: "Cancelar",
    loading: "Cargando...",
    error: "Error",
    success: "Éxito"
  },
  
  ar: {
    // Navigation
    home: "الرئيسية",
    calendar: "التقويم",
    booking: "مساحة الدراسة",
    leaderboard: "الترتيب",
    qrScanner: "قارئ QR",
    profile: "الملف الشخصي",
    centerName: "مركز الشباب",
    centerTagline: "تطبيقك المرجعي",
    menu: "القائمة",
    
    // Dashboard
    welcome: "مرحبا",
    welcomeSubtitle: "مرحبا بك في مركز الشباب الرقمي",
    level: "المستوى",
    points: "نقاط",
    progressToLevel: "التقدم إلى المستوى",
    pointsMissing: "نقاط مفقودة",
    upcomingAppointments: "المواعيد القادمة",
    yourPoints: "نقاطك",
    totalPointsEarned: "إجمالي النقاط المكتسبة",
    pointsToNextLevel: "نقاط للمستوى التالي",
    yourStats: "إحصائياتك",
    activitiesWeek: "أنشطة هذا الأسبوع",
    studyHours: "ساعات الدراسة",
    recentActivities: "الأنشطة الأخيرة",
    weeklyGoals: "الأهداف الأسبوعية",
    centerNews: "أخبار المركز",
    
    // Quick Actions
    bookStudySpace: "احجز مساحة دراسة",
    viewCalendar: "عرض التقويم",
    scanQR: "مسح QR",
    leaderboards: "الترتيب",
    
    // Profile
    editProfile: "تحرير الملف الشخصي",
    badges: "الشارات",
    achievements: "الإنجازات",
    settings: "الإعدادات",
    logout: "تسجيل الخروج",
    language: "اللغة",
    theme: "المظهر",
    darkTheme: "المظهر الداكن",
    lightTheme: "المظهر الفاتح",
    
    // Common
    confirmed: "مؤكد",
    pending: "في الانتظار",
    save: "حفظ",
    cancel: "إلغاء",
    loading: "جاري التحميل...",
    error: "خطأ",
    success: "نجح"
  },
  
  zh: {
    // Navigation
    home: "首页",
    calendar: "日历",
    booking: "学习空间",
    leaderboard: "排行榜",
    qrScanner: "二维码扫描",
    profile: "个人资料",
    centerName: "青年中心",
    centerTagline: "您的参考应用",
    menu: "菜单",
    
    // Dashboard
    welcome: "你好",
    welcomeSubtitle: "欢迎来到您的数字青年中心",
    level: "等级",
    points: "积分",
    progressToLevel: "升级进度",
    pointsMissing: "缺少积分",
    upcomingAppointments: "即将到来的预约",
    yourPoints: "您的积分",
    totalPointsEarned: "获得的总积分",
    pointsToNextLevel: "到下一级的积分",
    yourStats: "您的统计",
    activitiesWeek: "本周活动",
    studyHours: "学习时间",
    recentActivities: "最近活动",
    weeklyGoals: "每周目标",
    centerNews: "中心新闻",
    
    // Quick Actions
    bookStudySpace: "预订学习空间",
    viewCalendar: "查看日历",
    scanQR: "扫描二维码",
    leaderboards: "排行榜",
    
    // Profile
    editProfile: "编辑个人资料",
    badges: "徽章",
    achievements: "成就",
    settings: "设置",
    logout: "登出",
    language: "语言",
    theme: "主题",
    darkTheme: "深色主题",
    lightTheme: "浅色主题",
    
    // Common
    confirmed: "已确认",
    pending: "待处理",
    save: "保存",
    cancel: "取消",
    loading: "加载中...",
    error: "错误",
    success: "成功"
  }
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('language') || 'it';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    // Set HTML direction for RTL languages
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  const t = (key: string): string => {
    return translations[language as keyof typeof translations]?.[key as keyof typeof translations['it']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};