import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { X, ArrowRight, ArrowLeft, Play } from 'lucide-react';

interface OnboardingTourProps {
  children: React.ReactNode;
}

export const OnboardingTour: React.FC<OnboardingTourProps> = ({ children }) => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const hasSeenTour = localStorage.getItem('hasSeenTour');
    if (!hasSeenTour) {
      // Show tour after a short delay to let the app render
      setTimeout(() => setIsOpen(true), 1500);
    }
  }, []);

  const tourSteps = [
    {
      title: t('welcomeTitle'),
      content: t('welcomeDesc'),
      highlight: '[data-tour="welcome"]',
    },
    {
      title: t('menu'),
      content: t('navigationStep'),
      highlight: '[data-tour="navigation"]',
    },
    {
      title: 'Dashboard',
      content: t('dashboardStep'),
      highlight: '[data-tour="dashboard"]',
    },
    {
      title: 'Quick Actions',
      content: t('bookingStep'),
      highlight: '[data-tour="quick-actions"]',
    },
  ];

  const closeTour = () => {
    setIsOpen(false);
    localStorage.setItem('hasSeenTour', 'true');
  };

  const nextStep = () => {
    if (currentStep < tourSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      closeTour();
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  if (!isOpen) {
    return (
      <div>
        {children}
        {/* Floating tour restart button */}
        <Button
          onClick={() => {
            setCurrentStep(0);
            setIsOpen(true);
          }}
          className="fixed bottom-4 right-4 z-50 rounded-full shadow-lg"
          size="icon"
          variant="secondary"
          title={t('startTour')}
        >
          <Play className="h-4 w-4" />
        </Button>
      </div>
    );
  }

  return (
    <div>
      {children}
      
      {/* Tour overlay */}
      <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md animate-in fade-in-0 zoom-in-95 duration-300">
          <CardContent className="p-0">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-primary">
                  {t('startTour')}
                </span>
                <span className="text-xs text-muted-foreground">
                  {currentStep + 1} / {tourSteps.length}
                </span>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={closeTour}
                className="h-8 w-8"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            
            {/* Content */}
            <div className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {tourSteps[currentStep]?.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {tourSteps[currentStep]?.content}
              </p>
            </div>
            
            {/* Progress bar */}
            <div className="px-6 pb-4">
              <div className="w-full bg-muted rounded-full h-2">
                <div 
                  className="bg-primary h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentStep + 1) / tourSteps.length) * 100}%` }}
                />
              </div>
            </div>
            
            {/* Footer */}
            <div className="flex items-center justify-between p-4 border-t bg-muted/30">
              <Button
                variant="outline"
                onClick={closeTour}
                className="text-sm"
              >
                {t('skipTour')}
              </Button>
              
              <div className="flex gap-2">
                {currentStep > 0 && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={prevStep}
                  >
                    <ArrowLeft className="h-4 w-4 mr-1" />
                    {t('prev')}
                  </Button>
                )}
                
                <Button
                  onClick={nextStep}
                  size="sm"
                >
                  {currentStep < tourSteps.length - 1 ? t('next') : t('finish')}
                  {currentStep < tourSteps.length - 1 && (
                    <ArrowRight className="h-4 w-4 ml-1" />
                  )}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default OnboardingTour;