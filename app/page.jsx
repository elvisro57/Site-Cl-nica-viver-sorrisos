"use client"

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { WhatsappIcon } from './components/WhatsappIcon'
import { CheckCircle2, MapPin, Phone, Instagram, Star, Quote, ChevronDown, Sparkles, Smile, ShieldCheck, HeartPulse, Layers, Stethoscope, Activity, Wind, CheckSquare, X, Utensils, Clock, Facebook, ChevronLeft, ChevronRight } from 'lucide-react'

const testimonialsData = [
  {
    name: "Thiago Ribeiro",
    text: "Sou cliente à um bom tempo, o atendimento é excelente,os profissionais são muito atenciosos, fiz recentemente duas facetas e estou muito feliz com o resultado, gostaria de agradecer o Mohammed e o Felipe por terem conduzido e executado essa conquista pessoal.."
  },
  {
    name: "Valeria Gessi",
    text: "A clínica é muito bem localizada. O atendimento é realizado com respeito e responsabilidade.."
  },
  {
    name: "Rafaela Joana dos Santos",
    text: "Excelente atendimento começando da recepção até o atendimento com a Doutora.. recomendo de olhos fechados! Trouxeram minha autoestima de volta..."
  },
  {
    name: "Cristiano Rodrigues",
    text: "Clínica bem localizada, Excelentes Profissionais! Super indico 👏🏻 …"
  },
  {
    name: "Mayara Barbosa",
    text: "Ótimos profissionais!"
  },
  {
    name: "Luana Cardoso",
    text: "Ótimos profissionais, limpeza, restauração e clareamento 👏🏻👏🏻 …"
  },
  {
    name: "Johnny Maicon",
    text: "Ótimo atendimento 👏👏 excelentes profissionais 👏👏 …"
  },
  {
    name: "Flávio Sousa",
    text: "Muito bom, ótimo atendimento e atenção ao cliente"
  },
  {
    name: "Tatyane Borges",
    text: "Recomendo ambiente agradável atendimento muito bom, fora orçamento que cabe no seu bolso, profissionais de qualidade parabéns..."
  },
  {
    name: "Danilo Costa Barbosa",
    text: "Muito bom o atendimento, todos dês da recepção até a dentista são super atencioso e cuidadosos"
  },
  {
    name: "Robson Mota",
    text: "Ótimos profissionais estão de parabéns super recomendo"
  }
];

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={`faq-item ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)}>
      <button className="faq-question">
        {question}
        <ChevronDown className="faq-icon" size={20} />
      </button>
      <div className="faq-answer">
        <p>{answer}</p>
      </div>
    </div>
  )
}

export default function Home() {
  const carouselRef = useRef(null);

  const scrollTestimonials = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -350 : 350;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    };

    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <main>
      {/* TOP NAV BAR */}
      <nav className="top-nav">
        <div className="container nav-container">

          <div className="nav-links">
            <a href="#">Início</a>
            <a href="#servicos">Especialidades</a>
            <a href="#sobre">Sobre Nós</a>
            <a href="#equipe">Equipe</a>
            <a href="#faq">FAQ</a>
            <a href="#contato">Contato</a>
          </div>
          <a href="https://wa.me/5545991530576?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es" target="_blank" rel="noopener noreferrer" className="nav-cta">
            Agendar
          </a>
        </div>
      </nav>
      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <div className="hero-left">
            <Image
              src="/clinic_logo.png"
              alt="Logo Viver Sorrisos"
              width={350}
              height={140}
              className="hero-logo reveal"
            />
            <h1 className="hero-title reveal delay-100">Transformando Sorrisos e Vidas</h1>
            <p className="hero-subtitle reveal delay-200">
              Especialistas em Implantes Dentários, Prótese e Estética. Recupere sua autoestima com um sorriso perfeito.
            </p>
            <a href="https://wa.me/5545991530576?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es" target="_blank" rel="noopener noreferrer" className="btn btn-gold hero-cta reveal delay-300">
              Agende sua Avaliação
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="services-section bg-gray" id="servicos">
        <div className="container">
          <div className="text-center reveal">
            <h2 className="section-title">Nossas Especialidades</h2>
            <p className="section-subtitle">Tratamentos odontológicos de excelência para todas as suas necessidades</p>
          </div>

          <div className="services-grid">
            <div className="service-card reveal delay-100">
              <div className="service-image">
                <Image src="/protese_new.png" alt="Prótese" width={400} height={300} />
              </div>
              <div className="service-content">
                <h3>Prótese</h3>
                <p>Renove sua autoconfiança com uma solução fixa e duradoura, garantindo estabilidade e estética em um só sorriso.</p>
              </div>
            </div>
            <div className="service-card reveal delay-200">
              <div className="service-image">
                <Image src="/implante_dentario.png" alt="Implante Dentário" width={400} height={300} />
              </div>
              <div className="service-content">
                <h3>Implante Dentário</h3>
                <p>Recupere a estabilidade do seu sorriso com substituições definitivas e funcionais, sentindo como se fossem seus dentes naturais.</p>
              </div>
            </div>
            <div className="service-card reveal delay-300">
              <div className="service-image">
                <Image src="/cirurgia_oral.png" alt="Cirurgia Oral Menor" width={400} height={300} />
              </div>
              <div className="service-content">
                <h3>Cirurgia Oral Menor</h3>
                <p>Procedimentos cirúrgicos como extrações realizados com precisão milimétrica, máximo conforto e total segurança para você.</p>
              </div>
            </div>
            <div className="service-card reveal delay-100">
              <div className="service-image">
                <Image src="/ortodontia_braces.png" alt="Ortodontia" width={400} height={300} />
              </div>
              <div className="service-content">
                <h3>Ortodontia</h3>
                <p>Conquiste um sorriso perfeitamente alinhado e harmônico, preservando a saúde e a estética do seu rosto com tratamentos modernos.</p>
              </div>
            </div>
            <div className="service-card reveal delay-200">
              <div className="service-image">
                <Image src="/lentes_contato.png" alt="Facetas em Resina" width={400} height={300} />
              </div>
              <div className="service-content">
                <h3>Facetas em Resina</h3>
                <p>Transforme a cor e o formato dos seus dentes com máxima delicadeza, garantindo um resultado natural e completamente deslumbrante.</p>
              </div>
            </div>
            <div className="service-card reveal delay-300">
              <div className="service-image">
                <Image src="/endodontia_tratamento.png" alt="Endodontia" width={400} height={300} />
              </div>
              <div className="service-content">
                <h3>Endodontia</h3>
                <p>Tratamento de canal seguro e rápido para preservar a estrutura original do seu dente, livrando você de desconfortos e dores.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROTOCOLO SECTION */}
      <section className="protocolo-section">
        <div className="protocolo-overlay"></div>
        <div className="container">
          <div className="reveal text-center">
            <h2 className="protocolo-title">Entenda a Prótese Protocolo</h2>
            <p className="protocolo-desc">
              A prótese protocolo é a solução definitiva para quem perdeu todos os dentes. Trata-se de uma <strong>estrutura completa fixada firmemente</strong> sobre implantes de titânio. Ao contrário das dentaduras convencionais, ela <strong>não se desloca e não machuca</strong>, garantindo absoluta firmeza. É a oportunidade perfeita para você voltar a mastigar com segurança, se comunicar sem receios e exibir um sorriso harmonioso com aspecto natural.
            </p>
          </div>

          <div className="protocolo-grid">
            <div className="protocolo-card reveal delay-100">
              <div className="protocolo-icon">
                <ShieldCheck size={36} />
              </div>
              <h3>Estabilidade Absoluta</h3>
              <p>Fica firmemente presa aos implantes, eliminando o desconforto das próteses móveis.</p>
            </div>
            <div className="protocolo-card reveal delay-200">
              <div className="protocolo-icon">
                <Utensils size={36} />
              </div>
              <h3>Força na Mastigação</h3>
              <p>Volte a mastigar os seus alimentos favoritos sem nenhuma dor ou insegurança.</p>
            </div>
            <div className="protocolo-card reveal delay-300">
              <div className="protocolo-icon">
                <Smile size={36} />
              </div>
              <h3>Estética Impecável</h3>
              <p>Um sorriso bonito e totalmente harmônico que devolve a beleza natural do seu rosto.</p>
            </div>
            <div className="protocolo-card reveal delay-400">
              <div className="protocolo-icon">
                <Clock size={36} />
              </div>
              <h3>Resultado Duradouro</h3>
              <p>Um investimento seguro e de longo prazo para a saúde e o bem-estar da sua boca.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4 PASSOS SECTION */}
      <section className="steps-section marble-bg">
        <div className="container">
          <div className="text-center reveal">
            <h2 className="section-title">O Caminho para o Seu Novo Sorriso em 4 Etapas Simples</h2>
          </div>
          <div className="steps-grid">
            <div className="step-card reveal delay-100">
              <div className="step-number">
                <span>PASSO</span>
                <strong>1</strong>
              </div>
              <h3>Diagnóstico e Planejamento</h3>
              <p>Realizamos uma avaliação clínica detalhada com exames de imagem e projetamos digitalmente o resultado ideal para você.</p>
            </div>
            <div className="step-card reveal delay-200">
              <div className="step-number">
                <span>PASSO</span>
                <strong>2</strong>
              </div>
              <h3>Instalação dos Implantes</h3>
              <p>Procedimento cirúrgico minimamente invasivo e indolor, realizado com anestesia local para garantir total conforto e segurança.</p>
            </div>
            <div className="step-card reveal delay-300">
              <div className="step-number">
                <span>PASSO</span>
                <strong>3</strong>
              </div>
              <h3>Confecção da Prótese</h3>
              <p>Após o período de cicatrização, moldamos e produzimos sua nova prótese sob medida, com testes rigorosos de adaptação.</p>
            </div>
            <div className="step-card reveal delay-400">
              <div className="step-number">
                <span>PASSO</span>
                <strong>4</strong>
              </div>
              <h3>Sorriso Renovado</h3>
              <p>Finalizamos com a entrega do seu novo sorriso, orientando sobre os cuidados diários e agendando as consultas de revisão.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE A CLÍNICA */}
      <section className="about-section marble-bg" id="sobre">
        <div className="container">
          <div className="text-center reveal">
            <h2 className="section-title">Nossa trajetória!</h2>
          </div>
          <div className="about-wrapper">
            <div className="about-image reveal-left">
              <Image
                src="/clinic_reception.png"
                alt="Recepção da Clínica Viver Sorrisos"
                width={500}
                height={600}
              />
            </div>
            <div className="about-text reveal-right">
              <p>
                A <strong>Viver Sorrisos</strong> é uma clínica odontológica familiar, fundada há quatro anos com base em um sonho e dedicação incansável. A Dra. Andreia Doroteu Dantas, uma dentista apaixonada e especialista em Implantodontia, Periodontia e Prótese, junto com seu esposo, Felipe Santos Nascimento, embarcou em uma jornada de transformação de vidas e de suas próprias histórias. Felipe, com seu espírito empreendedor vibrante, deixou a carreira militar para alugar um consultório já montado, iniciando assim um futuro promissor.
              </p>
              <p>
                Nos primeiros dias, a trajetória foi desafiadora. Felipe trabalhou como motorista de Uber, aproveitando cada corrida para promover a nova clínica, compartilhando informações sobre os serviços oferecidos e atraindo pacientes com um sorriso acolhedor e determinação inabalável. Enquanto isso, a Dra. Andreia se desdobrava atendendo clientes não apenas na clínica, mas também em outras localidades, garantindo que oferecessem um atendimento de excelência e construindo um vínculo de confiança com seus pacientes.
              </p>
              <p>
                Em 2020, após muito esforço e perseverança, o casal realizou seu sonho: a inauguração do primeiro consultório. Este momento emocionante simbolizou não apenas o trabalho árduo, mas também o amor e a união que os guiaram. Cada dia representa uma nova oportunidade de transformar sorrisos e vidas, e juntos, estão prontos para enfrentar o futuro.
              </p>
              <p>
                Hoje, o objetivo da Viver Sorrisos é consolidar-se como uma clínica reconhecida em Foz do Iguaçu e na tríplice fronteira, fortalecendo sua missão de transformar sorrisos e vidas através da satisfação, bem-estar, saúde e autoestima.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DOUTORES E SÓCIOS */}
      <section className="team-section" id="equipe">
        <div className="container">
          <h2 className="section-title text-center reveal">Nossos Sócios e Especialistas</h2>
          <div className="team-grid">
            <div className="team-card reveal delay-100">
              <div className="team-image">
                <Image 
                  src="/Dra. Andreia.jpg" 
                  alt="Dra. Andreia Doroteu Dantas" 
                  width={150} 
                  height={150}
                  className="team-photo team-photo-andreia"
                />
              </div>
              <h3>Dra. Andreia Doroteu Dantas</h3>
              <p className="team-role">Especialista em Implantodontia, Periodontia e Prótese</p>
              <p className="team-desc">Uma dentista apaixonada por transformar vidas através do sorriso.</p>
            </div>
            <div className="team-card reveal delay-200">
              <div className="team-image">
                <Image 
                  src="/Felipe Santos.jpg" 
                  alt="Felipe Santos Nascimento" 
                  width={150} 
                  height={150}
                  className="team-photo"
                />
              </div>
              <h3>Felipe Santos Nascimento</h3>
              <p className="team-role">Sócio Administrador / Empreendedor</p>
              <p className="team-desc">Espírito vibrante que impulsiona a Viver Sorrisos a crescer e impactar mais pessoas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="testimonials-section">
        <div className="container">
          <div className="text-center reveal">
            <h2 className="section-title">O Que Dizem Nossos Pacientes</h2>
            <p className="section-subtitle">A satisfação de quem já transformou o sorriso conosco</p>
          </div>
          <div className="carousel-wrapper reveal delay-100">
            <button onClick={() => scrollTestimonials('left')} className="carousel-btn left-btn" aria-label="Anterior">
              <ChevronLeft size={24} />
            </button>
            <div className="testimonials-carousel" ref={carouselRef}>
              {testimonialsData.map((t, index) => (
                <div key={index} className="testimonial-card">
                  <Quote className="quote-icon" size={40} />
                  <div className="stars">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} fill="currentColor" size={18} />
                    ))}
                  </div>
                  <p className="testimonial-text">"{t.text}"</p>
                  <div className="testimonial-author">
                    <div className="author-info">
                      <h4>{t.name}</h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button onClick={() => scrollTestimonials('right')} className="carousel-btn right-btn" aria-label="Próximo">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="faq-section bg-gray" id="faq">
        <div className="container">
          <div className="text-center reveal">
            <h2 className="section-title">Dúvidas Frequentes</h2>
            <p className="section-subtitle">Encontre respostas para as perguntas mais comuns</p>
          </div>
          <div className="faq-container reveal delay-200">
            <FAQItem
              question="Implante dentário dói?"
              answer="Hoje, os procedimentos de implante são realizados com técnicas modernas e anestesia eficaz, tornando o processo praticamente indolor. A maioria dos pacientes relata mais conforto do que imaginava, tanto durante quanto após o procedimento. Além disso, todo o processo é conduzido com acompanhamento para garantir uma recuperação tranquila."
            />
            <FAQItem
              question="O implante dentário parece natural?"
              answer="Sim. Os implantes são planejados de forma personalizada para cada paciente, levando em consideração formato do rosto, sorriso e características naturais dos dentes. O objetivo é que ninguém perceba que você fez um implante — apenas note um sorriso mais bonito e saudável."
            />
            <FAQItem
              question="Quanto tempo dura um implante dentário?"
              answer="Com os cuidados adequados, um implante pode durar muitos anos — frequentemente décadas. A durabilidade depende principalmente da higiene bucal, acompanhamento periódico e hábitos do paciente. É um investimento de longo prazo em saúde e qualidade de vida."
            />
            <FAQItem
              question="Como saber se eu realmente preciso de implante ou outro tratamento?"
              answer="Cada caso é único. Existem situações em que tratamentos como prótese ou periodontia podem ser indicados antes ou até no lugar do implante. Por isso, é fundamental uma avaliação criteriosa, onde o profissional analisa sua condição e indica a melhor solução, sempre priorizando saúde, funcionalidade e estética."
            />
          </div>
        </div>
      </section>

      {/* LOCATION SECTION */}
      <section className="location-section bg-gray" id="localizacao">
        <div className="container">
          <div className="location-card reveal">
            <div className="location-map">
              <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                src="https://maps.google.com/maps?q=R.%20Mal.%20Deodoro,%201745%20-%20Centro,%20Foz%20do%20Igua%C3%A7u%20-%20PR,%2085851-030&t=&z=16&ie=UTF8&iwloc=&output=embed"
                title="Mapa da Clínica"
                style={{ minHeight: '100%', border: 0 }}
                loading="lazy"
              ></iframe>
            </div>
            <div className="location-info">
              <h2 className="location-title">Endereço</h2>
              <a href="https://maps.app.goo.gl/9DU1JCaXU46okTEV8" target="_blank" rel="noopener noreferrer" className="location-address" style={{ display: 'block', textDecoration: 'none' }}>
                R. Mal. Deodoro, N° 1745 - Centro, Foz do Iguaçu - PR, 85851-030
              </a>
              <a href="https://maps.app.goo.gl/9DU1JCaXU46okTEV8" target="_blank" rel="noopener noreferrer" className="location-link">
                Ver no Google Maps
              </a>

              <h2 className="location-title" style={{ marginTop: '30px' }}>Horário De Atendimento</h2>
              <ul className="schedule-list">
                <li><CheckSquare size={20} color="#b5973c" /> Segunda a Sexta: 08:00–18:00</li>
                <li><CheckSquare size={20} color="#b5973c" /> Sábado: 08:00–12:00</li>
                <li><X size={20} color="#b8b8b8" /> Domingo: Fechado</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="site-footer" id="contato">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <Image
                src="/clinic_logo.png"
                alt="Logo Viver Sorrisos"
                width={200}
                height={80}
                style={{ marginBottom: '20px', filter: 'brightness(0) invert(1)' }}
              />
              <p style={{ marginTop: '20px', fontSize: '0.95rem' }}>
                Transformando sorrisos e vidas em Foz do Iguaçu através da satisfação, bem-estar e autoestima.
              </p>
            </div>
            
            <div className="footer-col">
              <h3>Sessões</h3>
              <ul className="footer-links">
                <li><a href="#servicos">Especialidades</a></li>
                <li><a href="#sobre">A Clínica</a></li>
                <li><a href="#equipe">Equipe</a></li>
                <li><a href="#faq">Dúvidas</a></li>
                <li><a href="#localizacao">Localização</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h3>Contato</h3>
              <p><Phone size={18} color="#b5973c" /> (45) 99153-0576</p>
              <a href="https://wa.me/5545991530576?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es" target="_blank" rel="noopener noreferrer" className="btn btn-gold" style={{ padding: '10px 20px', fontSize: '0.9rem', marginTop: '15px' }}>
                Falar no WhatsApp
              </a>
            </div>

            <div className="footer-col">
              <h3>Localização & Redes</h3>
              <a href="https://maps.app.goo.gl/9DU1JCaXU46okTEV8" target="_blank" rel="noopener noreferrer">
                <p><MapPin size={18} color="#b5973c" /> R. Mal. Deodoro, N° 1745 - Centro, Foz do Iguaçu - PR, 85851-030</p>
              </a>
              <div className="footer-socials">
                <a href="https://www.instagram.com/viversorrisosfoz/" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <Instagram size={20} />
                </a>
                <a href="https://www.facebook.com/p/Viver-Sorrisos-Foz-61569360783570/" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <Facebook size={20} />
                </a>
                <a href="https://wa.me/5545991530576?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <Phone size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Viver Sorrisos Odontologia e Estética. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* WHATSAPP FLOAT */}
      <a
        href="https://wa.me/5545991530576?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es"
        className="float-whatsapp"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale conosco no WhatsApp"
      >
        <WhatsappIcon />
      </a>
    </main>
  )
}
