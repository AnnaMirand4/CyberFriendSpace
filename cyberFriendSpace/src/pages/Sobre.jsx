import Header from '../components/Header'
import style from '../styles/pages/sobre.module.css'
import cyberb from '../assets/cyberb.svg'
import Text from '../components/Text'
import SubText from '../components/SubText'
import Title from '../components/Title'
import SubTitle from '../components/SubTitle'
import img from '../assets/cyberbully.svg'

const Sobre = () => {
  return (
    <>
    <Header
      title='Cyberbullying: O que é e como combatê-lo'
      img={cyberb}
    />
    <section className={style.section}>
    <SubText
    content='O cyberbullying é uma forma de agressão e assédio virtual que ocorre principalmente nas plataformas digitais, como redes sociais, aplicativos de mensagens e fóruns online. Nessa prática, indivíduos utilizam a internet para humilhar, intimidar, difamar ou ameaçar outras pessoas, geralmente de forma repetida e intencional. O anonimato e a facilidade de disseminação de informações na internet tornam o cyberbullying uma ameaça preocupante, especialmente para crianças e adolescentes, que são os mais vulneráveis a esse tipo de comportamento.'
    />
    <Title
    content='Formas de combater o cyberbullying'
    />
    <SubTitle
    content='1.Conscientização e Educação'
    />
    <Text
    content='A conscientização é fundamental para combater o cyberbullying. Escolas, famílias e comunidades devem se unir para informar sobre os riscos e consequências dessa prática. Palestras, workshops e campanhas podem ajudar a disseminar informações importantes.'
    />
    <SubTitle
    content='2.Estabelecimento de políticas anti-bullying'
    />
    <Text
    content='As escolas e instituições devem criar e implementar políticas específicas de combate ao cyberbullying. Isso inclui orientações claras para alunos, pais e professores sobre como reconhecer, relatar e lidar com o cyberbullying.'
    />
    <SubTitle
    content='3.Incentivar uma cultura de respeito e empatia'
    />
    <Text
    content='É importante promover uma cultura que valorize o respeito mútuo e a empatia. Estimular o diálogo aberto sobre as consequências negativas do cyberbullying e o impacto que pode ter na vida das vítimas pode ajudar a criar uma comunidade mais solidária.'
    />
    <SubTitle
    content='4.Bloquear e denunciar'
    />
    <Text
    content='As plataformas online oferecem opções para bloquear e denunciar comportamentos abusivos. Incentive as vítimas a bloquearem os agressores e a denunciarem o conteúdo ofensivo às plataformas para que possam tomar medidas adequadas.'
    />
    <SubTitle
    content='5.Apoio psicológico'
    />
    <Text
    content='As vítimas de cyberbullying podem sofrer danos emocionais significativos. O apoio psicológico é crucial para ajudá-las a lidar com as consequências desse tipo de violência. Profissionais de saúde mental e orientadores escolares podem desempenhar um papel importante nesse processo.'
    />
    <img src={img} alt='imagem em desenho de uma moça triste com os comentários da internet' className={style.img} />
    <Title 
    content='Casos reais conhecidos'
    />
    <SubTitle
    content='1.Caso Amanda Todd'
    />
    <Text
    content='Amanda Todd foi uma adolescente canadense que cometeu suicídio em 2012, após ser vítima de cyberbullying. Antes de sua morte, ela postou um vídeo emocionante no YouTube, contando sua história e mostrando cartazes com as mensagens que recebera dos agressores. O caso de Amanda trouxe atenção global para o problema do cyberbullying.
    Fonte: CBC News - "Who was Amanda Todd? The Canadian teen behind the video on bullying that went viral before her death" (CBC News)'
    /><SubTitle
    content='2.Caso Ryan Halligan'
    />
    <Text
    content='Ryan Halligan, de 13 anos, tirou a própria vida em 2003 após sofrer bullying, tanto pessoalmente quanto online. Ele foi alvo de difamação e insultos cruéis através de mensagens e fóruns online.
    Fonte: The New York Times - "A Boys Life" (The New York Times)'
    /><SubTitle
    content='3.Caso Rehtaeh Parsons'
    />
    <Text
    content='Rehtaeh Parsons, uma adolescente canadense, morreu em 2013, após tentar o suicídio devido ao cyberbullying. Ela foi agredida sexualmente e, posteriormente, fotos desse incidente foram compartilhadas online, tornando-a alvo de mais abusos.
    Fonte: BBC News - "Rehtaeh Parsons: Canadian teenager who was bullied after alleged rape dies" (BBC News'
    />
    <Title 
    content='Conclusão'
    />
    <Text
    content='O cyberbullying é uma séria ameaça que afeta a saúde mental e emocional das vítimas. A conscientização, a educação e o estabelecimento de políticas anti-bullying são passos essenciais para combater esse problema. É dever de todos promover uma cultura de respeito, empatia e apoio para tornar a internet um espaço mais seguro e positivo para todos.'
    />

    </section>
    
    </>
  )
}

export default Sobre