// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.
import {
  GithubIcon,
  DiscordIcon,
  InstagramIcon,
  TwitchIcon,
  YoutubeIcon,
} from "@/components/Icons";

export default {
  head: {
    title: "Fernando Papito",
    description: "Descomplicando a programação WEB!",
    image: "https://github.com/papito.png",
  },
  links: {
    primary: [
      {
        url: "https://www.rocketseat.com.br/eventos/nlw?utm_source=mayk&utm_medium=organic&utm_campaign=lead&utm_term=evento-nlw&utm_content=pagevento-lp_evento_nlw_pocket_inscricao",
        title: "✨ NLW 17 ✨",
        description: "Evento gratuito para você construir um projeto em 3 dias.",
        colors: {
          background: 'bg-gradient-to-br from-[#e254ff] to-[#5f75f2] hover:from-[#9956f6] hover:to-[#29e0a9] ',
          title: 'text-black',
          description: 'text-gray-800'
        }
      },
      {
        url: "https://one.papito.dev",
        title: "Rocketseat",
        description: "Formação completa em programação WEB",
      },
      {
        url: "https://discover.papito.dev",
        title: "Discover (gratuito)",
        description: "+5h de curso de programação WEB para iniciantes",
      },
      {
        url: "https://masterclassjs.papito.dev",
        title: "Quiz JavaScript",
        description: "Teste seus conhecimentos em JavaScript",
      },
      {
        url: "https://biblioteca.papito.dev",
        title: "+20 Cursos (gratuitos)",
        description: "Cursos de HTML, CSS, JS, Node, SQL, etc...",
      },
    ],
    social: [
      {
        url: "https://github.com/papito",
        title: "Github",
        icon: GithubIcon,
      },
      {
        url: "https://twitch.tv/papito",
        title: "Twitch",
        icon: TwitchIcon,
      },
      {
        url: "https://youtube.com/papito",
        title: "Youtube",
        icon: YoutubeIcon,
      },
      {
        url: "https://discord.papito.dev",
        title: "Discord",
        icon: DiscordIcon,
      },
      {
        url: "https://instagram.com/papito",
        title: "Instagram",
        icon: InstagramIcon,
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
