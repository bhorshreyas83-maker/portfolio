export const socialLinks = {
  whatsapp: {
    phoneNumber: '919699376607',
    message: 'Hello Shreyas, I visited your portfolio website and would like to connect with you.',
  },
  email: 'bhorshreyas83@gmail.com',
  location: 'Sangamner, Maharashtra, India',
  instagram: 'https://instagram.com/your_username',
  telegram: 'https://t.me/shreyasbhor',
  github: 'https://github.com/shreyasbhor',
  linkedin: 'https://linkedin.com/in/shreyasbhor'
};

export const getWhatsAppLink = () => {
  const { phoneNumber, message } = socialLinks.whatsapp;
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
};
