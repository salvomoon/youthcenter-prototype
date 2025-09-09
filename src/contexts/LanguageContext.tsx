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
    
    // Tour
    startTour: "Inizia Tour",
    skipTour: "Salta Tour",
    next: "Avanti",
    prev: "Indietro",
    finish: "Finisci",
    welcomeTitle: "Benvenuto nel Centro Giovani!",
    welcomeDesc: "Ti mostreremo come utilizzare questa applicazione in pochi semplici passaggi.",
    dashboardStep: "Questa è la dashboard principale dove puoi vedere i tuoi appuntamenti, punti e accedere rapidamente alle funzioni.",
    calendarStep: "Nel calendario puoi visualizzare tutti gli eventi e attività del centro in forma cronologica.",
    bookingStep: "Qui puoi prenotare sale, computer e partecipare ad attività del centro.",
    leaderboardStep: "La classifica mostra i punti di tutti i partecipanti. Partecipa alle attività per guadagnare punti!",
    qrStep: "Usa lo scanner QR per check-in rapido agli eventi e guadagnare punti automaticamente.",
    profileStep: "Nel tuo profilo puoi vedere le tue informazioni, progress e achievements.",
    navigationStep: "Usa questo menu per navigare tra le diverse sezioni dell'app.",
    
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
    
    // Tour
    startTour: "Start Tour",
    skipTour: "Skip Tour",
    next: "Next",
    prev: "Previous",
    finish: "Finish",
    welcomeTitle: "Welcome to Youth Center!",
    welcomeDesc: "We'll show you how to use this application in a few simple steps.",
    dashboardStep: "This is the main dashboard where you can see your appointments, points and quickly access functions.",
    calendarStep: "In the calendar you can view all center events and activities in chronological form.",
    bookingStep: "Here you can book rooms, computers and participate in center activities.",
    leaderboardStep: "The leaderboard shows points of all participants. Join activities to earn points!",
    qrStep: "Use the QR scanner for quick check-in to events and automatically earn points.",
    profileStep: "In your profile you can see your information, progress and achievements.",
    navigationStep: "Use this menu to navigate between different sections of the app.",
    
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
    
    // Tour
    startTour: "Iniciar Tour",
    skipTour: "Saltar Tour",
    next: "Siguiente",
    prev: "Anterior",
    finish: "Finalizar",
    welcomeTitle: "¡Bienvenido al Centro Juvenil!",
    welcomeDesc: "Te mostraremos cómo usar esta aplicación en unos simples pasos.",
    dashboardStep: "Este es el panel principal donde puedes ver tus citas, puntos y acceder rápidamente a las funciones.",
    calendarStep: "En el calendario puedes ver todos los eventos y actividades del centro en forma cronológica.",
    bookingStep: "Aquí puedes reservar salas, computadoras y participar en actividades del centro.",
    leaderboardStep: "La tabla de clasificación muestra los puntos de todos los participantes. ¡Únete a actividades para ganar puntos!",
    qrStep: "Usa el escáner QR para check-in rápido a eventos y ganar puntos automáticamente.",
    profileStep: "En tu perfil puedes ver tu información, progreso y logros.",
    navigationStep: "Usa este menú para navegar entre las diferentes secciones de la app.",
    
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
    
    // Tour
    startTour: "بدء الجولة",
    skipTour: "تخطي الجولة",
    next: "التالي",
    prev: "السابق",
    finish: "إنهاء",
    welcomeTitle: "مرحباً بك في مركز الشباب!",
    welcomeDesc: "سنوضح لك كيفية استخدام هذا التطبيق في خطوات بسيطة.",
    dashboardStep: "هذه هي لوحة التحكم الرئيسية حيث يمكنك رؤية مواعيدك ونقاطك والوصول السريع للوظائف.",
    calendarStep: "في التقويم يمكنك عرض جميع الأحداث والأنشطة في المركز بشكل زمني.",
    bookingStep: "هنا يمكنك حجز الغرف والحاسوب والمشاركة في أنشطة المركز.",
    leaderboardStep: "لوحة المتصدرين تُظهر نقاط جميع المشاركين. انضم للأنشطة لكسب النقاط!",
    qrStep: "استخدم ماسح QR للتسجيل السريع في الأحداث وكسب النقاط تلقائياً.",
    profileStep: "في ملفك الشخصي يمكنك رؤية معلوماتك وتقدمك وإنجازاتك.",
    navigationStep: "استخدم هذه القائمة للتنقل بين أقسام التطبيق المختلفة.",
    
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
    
    // Tour
    startTour: "开始导览",
    skipTour: "跳过导览",
    next: "下一步",
    prev: "上一步",
    finish: "完成",
    welcomeTitle: "欢迎来到青年中心！",
    welcomeDesc: "我们将通过几个简单的步骤向您展示如何使用此应用程序。",
    dashboardStep: "这是主控制面板，您可以在这里查看您的预约、积分并快速访问功能。",
    calendarStep: "在日历中，您可以按时间顺序查看中心的所有活动和事件。",
    bookingStep: "在这里您可以预订房间、电脑并参与中心活动。",
    leaderboardStep: "排行榜显示所有参与者的积分。参加活动以赚取积分！",
    qrStep: "使用QR扫描器快速签到活动并自动赚取积分。",
    profileStep: "在您的个人资料中，您可以查看您的信息、进度和成就。",
    navigationStep: "使用此菜单在应用程序的不同部分之间导航。",
    
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