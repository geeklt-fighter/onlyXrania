"use client"
import { FC,FormEvent } from 'react';
import FadeInUp from '@/components/animations/FadeInUp';
import { FaYoutube, FaInstagram, FaPatreon, FaUser } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';


const SOCIAL_LINKS = {
  youtube: "https://www.youtube.com/@only_x_rania",
  patreon: "https://www.patreon.com/c/RaniaPrivateFantasies",
  fanvue: "https://www.fanvue.com/rania-sunshine",  // 替換為實際的 Fanvue 鏈接
  twitter: "https://x.com/rania_chic"   // 替換為實際的 Twitter 鏈接
};

const Contact: FC = () => {
  // 處理社交媒體點擊
  const handleSocialClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // 處理表單提交
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const form = e.currentTarget;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;

    // 構建郵件內容
    const mailtoLink = `mailto:aluciana0306@gmail.com?subject=Message from ${name}&body=From: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
    
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="relative py-32 sm:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80" />
      
      <div className="relative container mx-auto px-4 sm:px-6">
        {/* Header */}
        <FadeInUp>
          <div className="text-center max-w-3xl mx-auto mb-24">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-100 
                           text-sm tracking-[0.2em] uppercase mb-3 block font-sans">
              Contact Support
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold 
                         bg-gradient-to-r from-white via-gray-100 to-gray-300 
                         bg-clip-text text-transparent">
              Exclusive Assistance
            </h2>
          </div>
        </FadeInUp>

        {/* Social Links */}
        <FadeInUp delay={0.1}>
          <div className="flex justify-center gap-6 mb-12">
            {[
              { icon: <FaYoutube size={24} />, url: SOCIAL_LINKS.youtube, label: 'YouTube' },
              { icon: <FaXTwitter size={24} />, url: SOCIAL_LINKS.twitter, label: 'Instagram' },
              { icon: <FaPatreon size={24} />, url: SOCIAL_LINKS.patreon, label: 'Patreon' },
              { icon: <FaUser size={24} />, url: SOCIAL_LINKS.fanvue, label: 'Fanvue' }
            ].map((social, index) => (
              <button
                key={index}
                onClick={() => handleSocialClick(social.url)}
                className="text-zinc-400 hover:text-white transition-colors duration-300 
                         hover:scale-110 transform"
                aria-label={social.label}
              >
                {social.icon}
              </button>
            ))}
          </div>
        </FadeInUp>

        {/* Contact Form */}
        <FadeInUp delay={0.2}>
          <div className="max-w-2xl mx-auto">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name & Email Fields */}
                <div className="group relative">
                  <input 
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-white
                             placeholder:text-zinc-500 focus:outline-none
                             group-hover:border-amber-200/30 focus:border-amber-200/30
                             transition-all duration-300"
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/5 via-black/0 to-black/0 
                                group-hover:from-amber-900/10 group-hover:via-amber-900/5 group-hover:to-black/0
                                transition-all duration-500 pointer-events-none" />
                </div>

                <div className="group relative">
                  <input 
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-white
                             placeholder:text-zinc-500 focus:outline-none
                             group-hover:border-amber-200/30 focus:border-amber-200/30
                             transition-all duration-300"
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/5 via-black/0 to-black/0 
                                group-hover:from-amber-900/10 group-hover:via-amber-900/5 group-hover:to-black/0
                                transition-all duration-500 pointer-events-none" />
                </div>
              </div>

              {/* Message Field */}
              <div className="group relative">
                <textarea 
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  required
                  className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-white
                           placeholder:text-zinc-500 focus:outline-none resize-none
                           group-hover:border-amber-200/30 focus:border-amber-200/30
                           transition-all duration-300"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/5 via-black/0 to-black/0 
                              group-hover:from-amber-900/10 group-hover:via-amber-900/5 group-hover:to-black/0
                              transition-all duration-500 pointer-events-none" />
              </div>


              {/* Submit Button */}
              <div className="flex justify-center">
                <button 
                  type="submit"
                  className="group relative px-8 py-4 rounded-full overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-200 to-amber-400 
                                transition-transform duration-300 group-hover:scale-105" />
                  <span className="relative text-slate-900 font-medium">
                    Send Message
                  </span>
                </button>
              </div>
            </form>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
};

export default Contact; 