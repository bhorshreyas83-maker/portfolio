export const socialLinks = {
  whatsapp: {
    phoneNumber: '919699376607',
    message: 'Hello Shreyas, I visited your portfolio website and would like to connect with you.',
  },
  email: 'bhorshreyas83@gmail.com',
  location: 'Sangamner, Maharashtra, India',
  github: 'https://github.com/shreyasbhor',
  linkedin: 'https://www.linkedin.com/in/shreyas-bhor-61354a379'
};

export const getWhatsAppLink = () => {
  const { phoneNumber, message } = socialLinks.whatsapp;
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
};
