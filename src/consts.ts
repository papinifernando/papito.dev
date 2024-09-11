// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.
import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
} from "@/components/Icons";

export default {
  head: {
    title: "Fernando Papito",
    // description: "Descomplicando Automação de Testes!",
    // image: "https://github.com/papito.png",
  },
  links: {
    primary: [
      {
        url: "https://www.cyskills.com.br",
        title: "✨ Formação Cypress Skills ✨",
        description: "Faça testes rápidos, eficientes e confiáveis com Cypress e JavaScript!",
        colors: {
          background: 'bg-gradient-to-br from-[#28D07E] to-[#9CEE69] hover:from-[#9CEE69] hover:to-[#28D07E] ',
          title: 'text-black',
          description: 'text-zinc-800'
        }
      },
      {
        url: "https://escola.papito.dev",
        title: "Papito QA School",
        description: "Aprenda automação de testes e qualidade de software.",
      },
      {
        url: "https://t.me/fernandopapito",
        title: "Meu canal no Telegram",
        description: "Conecte-se para insights e oportunidades como QA",
      },
      {
        url: "https://quiz.papito.dev",
        title: "Quiz Cypress",
        description: "Teste seus conhecimentos em automação de testes com Cypress",
      },
      {
        url: "https://www.udemy.com/user/fernando-papito/",
        title: "+20 Cursos na Udemy",
        description: "Cursos de Cypress, Playwright, Robot Framework, TestOps e muito mais...",
      },
    ],
    social: [
      {
        url: "https://www.linkedin.com/in/papitodev/",
        title: "LinkedIn",
        icon: LinkedinIcon,
      },
      {
        url: "https://youtube.com/@papitodev",
        title: "Youtube",
        icon: YoutubeIcon,
      },
      {
        url: "https://instagram.com/papitodev",
        title: "Instagram",
        icon: InstagramIcon,
      },
      {
        url: "https://github.com/papitodev",
        title: "Github",
        icon: GithubIcon,
      },
    ],
  },
} as {
  head: {
    title: string;
    description: string;
    image: string;
  };
  links: {
    primary: {
      url: string;
      title: string;
      description: string;
      colors?: {
        title?: string;
        description?: string;
        background?: string;
      };
    }[];
    social: {
      url: string;
      title: string;
      icon: any;
    }[];
  };
};
