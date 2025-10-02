import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-peach-50 flex items-center justify-center p-4 md:p-8">
      <Card className="w-[148mm] h-[210mm] bg-gradient-to-b from-white to-pink-50/30 shadow-2xl overflow-auto" style={{ aspectRatio: '148/210' }}>
        <div className="p-4 space-y-3">
          
          <div className="text-center space-y-1 animate-fade-in">
            <h1 className="text-2xl font-playfair text-primary font-bold tracking-tight leading-tight">
              Торты и десерты на заказ
            </h1>
            <p className="text-sm text-muted-foreground font-light tracking-wide">
              от Марии Лебедевой
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2 animate-scale-in">
            <div className="aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <img 
                src="https://cdn.poehali.dev/files/c61975e2-7be5-42f3-9b29-ed514f7ccd55.jpg" 
                alt="Капкейки с начинкой"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <img 
                src="https://cdn.poehali.dev/files/d58a0ead-b9fb-40e3-b82d-3992534b8985.jpg" 
                alt="Набор шоколада"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          <div className="text-center space-y-1 py-2 animate-slide-up">
            <h2 className="text-xl font-playfair text-primary font-semibold">
              Десерты к чаю за 1 день
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Card className="p-3 bg-white/80 backdrop-blur-sm border-2 border-primary/20 hover:border-primary/40 transition-colors duration-300">
              <div className="text-center space-y-1">
                <Icon name="Truck" className="mx-auto text-primary" size={20} />
                <p className="text-xs font-medium text-foreground/80">Бесплатная доставка</p>
                <p className="text-[10px] text-muted-foreground">при первом заказе</p>
              </div>
            </Card>
            
            <Card className="p-3 bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-primary hover:border-primary/80 transition-colors duration-300">
              <div className="text-center space-y-1">
                <Icon name="Tag" className="mx-auto text-primary" size={20} />
                <p className="text-xs font-semibold text-primary">Промокод</p>
                <p className="text-lg font-playfair font-bold text-primary">КУКИС</p>
              </div>
            </Card>
          </div>

          <div className="grid grid-cols-2 gap-2 animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <div className="aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <img 
                src="https://cdn.poehali.dev/files/29d8d841-55c7-4bc2-8226-4a9df29f591c.jpg" 
                alt="Детский торт с мишкой"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <img 
                src="https://cdn.poehali.dev/files/c908e5eb-b6d3-4ebb-b277-9e2b48c6531a.jpg" 
                alt="Торт с облаками"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          <div className="border-t-2 border-primary/20 pt-2 space-y-2 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="grid grid-cols-3 gap-2 text-center text-xs">
              <div className="space-y-0.5">
                <Icon name="Cake" className="mx-auto text-primary" size={16} />
                <p className="font-medium text-[10px]">Торты бенто</p>
              </div>
              <div className="space-y-0.5">
                <Icon name="Users" className="mx-auto text-primary" size={16} />
                <p className="font-medium text-[10px]">Корпоративные заказы</p>
              </div>
              <div className="space-y-0.5">
                <Icon name="GraduationCap" className="mx-auto text-primary" size={16} />
                <p className="font-medium text-[10px]">Мастер-классы</p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 pt-1">
              <Icon name="Phone" className="text-primary" size={14} />
              <a href="tel:+79163840802" className="text-xs text-foreground hover:text-primary transition-colors font-medium">
                +7 (916) 384-08-02
              </a>
            </div>

            <div className="flex items-center justify-center gap-4 pt-1">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center mb-1">
                  <Icon name="QrCode" size={28} className="text-primary/60" />
                </div>
                <p className="text-[9px] text-muted-foreground">Telegram</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center mb-1">
                  <Icon name="MessageCircle" size={28} className="text-primary/60" />
                </div>
                <p className="text-[9px] text-muted-foreground">WhatsApp</p>
              </div>
            </div>
          </div>

        </div>
      </Card>
    </div>
  );
};

export default Index;