import React, { useState, useEffect } from 'react';
import { TourProvider, useTour } from '@reactour/tour';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Play } from 'lucide-react';

interface OnboardingTourProps {
  children: React.ReactNode;
}

const TourButton: React.FC = () => {
  const { t } = useLanguage();
  const { setIsOpen, setCurrentStep } = useTour();

  const startTour = () => {
    setCurrentStep(0);
    setIsOpen(true);
  };

  return (
    <Button
      onClick={startTour}
      className="fixed bottom-6 right-6 z-40 rounded-full shadow-elegant"
      size="icon"
      variant="secondary"
      title={t('startTour')}
    >
      <Play className="h-4 w-4" />
    </Button>
  );
};

export const OnboardingTour: React.FC<OnboardingTourProps> = ({ children }) => {
  const { t } = useLanguage();

  const steps = [
    {
      selector: '[data-tour="welcome"]',
      content: (
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2 text-foreground">
            {t('welcomeTitle')}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {t('welcomeDesc')}
          </p>
        </div>
      ),
    },
    {
      selector: '[data-tour="navigation"]',
      content: (
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2 text-foreground">
            Menu di Navigazione
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {t('navigationStep')}
          </p>
        </div>
      ),
    },
    {
      selector: '[data-tour="quick-actions"]',
      content: (
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2 text-foreground">
            Azioni Rapide
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {t('bookingStep')}
          </p>
        </div>
      ),
    },
    {
      selector: '[data-tour="stats"]',
      content: (
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2 text-foreground">
            Le Tue Statistiche
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Qui puoi monitorare i tuoi progressi, punti guadagnati e attività completate.
          </p>
        </div>
      ),
    },
    {
      selector: '[data-tour="activities"]',
      content: (
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2 text-foreground">
            Attività Recenti
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Visualizza le tue ultime attività e i punti guadagnati.
          </p>
        </div>
      ),
    },
  ];

  useEffect(() => {
    const hasSeenTour = localStorage.getItem('hasSeenTour');
    if (!hasSeenTour) {
      // Start tour after app renders
      setTimeout(() => {
        const { setIsOpen } = useTour();
        setIsOpen(true);
      }, 2000);
    }
  }, []);

  return (
    <TourProvider
      steps={steps}
      showBadge={false}
      showNavigation={true}
      showDots={true}
      disableKeyboardNavigation={false}
      className="tour-step"
      styles={{
        popover: (base) => ({
          ...base,
          '--reactour-accent': 'hsl(var(--primary))',
          borderRadius: 12,
          backgroundColor: 'hsl(var(--card))',
          color: 'hsl(var(--card-foreground))',
          border: '1px solid hsl(var(--border))',
          boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
          maxWidth: 320,
        }),
        maskArea: (base) => ({
          ...base,
          rx: 12,
        }),
        badge: (base) => ({
          ...base,
          backgroundColor: 'hsl(var(--primary))',
          color: 'hsl(var(--primary-foreground))',
        }),
        controls: (base) => ({
          ...base,
          marginTop: 16,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }),
        navigation: (base) => ({
          ...base,
          display: 'flex',
          gap: 8,
        }),
        button: (base) => ({
          ...base,
          backgroundColor: 'hsl(var(--primary))',
          color: 'hsl(var(--primary-foreground))',
          border: 'none',
          borderRadius: 6,
          padding: '8px 16px',
          fontSize: 14,
          fontWeight: 500,
          cursor: 'pointer',
          transition: 'all 0.2s ease',
        }),
        close: (base) => ({
          ...base,
          position: 'absolute',
          top: 8,
          right: 8,
          backgroundColor: 'transparent',
          border: 'none',
          color: 'hsl(var(--muted-foreground))',
          cursor: 'pointer',
          padding: 4,
          borderRadius: 4,
        }),
      }}
      prevButton={(props) => (
        <button {...props} style={{ 
          backgroundColor: 'hsl(var(--secondary))', 
          color: 'hsl(var(--secondary-foreground))' 
        }}>
          {t('prev')}
        </button>
      )}
      nextButton={(props) => (
        <button {...props}>
          {t('next')}
        </button>
      )}
      onClickClose={() => {
        localStorage.setItem('hasSeenTour', 'true');
      }}
    >
      {children}
      <TourButton />
    </TourProvider>
  );
};

export default OnboardingTour;