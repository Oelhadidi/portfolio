import emailjs from '@emailjs/browser'

// Configuration EmailJS
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_yn0zopk',
  TEMPLATE_ID: 'template_fcwv1wh',
  PUBLIC_KEY: '3Wa4SPZiYJm6DmNzM'
}

// Initialiser EmailJS
export const initEmailJS = () => {
  emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY)
}

// Fonction pour envoyer un email
export const sendEmail = async (formData: {
  name: string
  email: string
  subject: string
  message: string
}) => {
  try {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_name: 'Omar ELHADIDI',
      to_email: 'omarelhadidi99@gmail.com'
    }

    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      templateParams,
      EMAILJS_CONFIG.PUBLIC_KEY
    )

    return { success: true, response }
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error)
    return { success: false, error }
  }
}
