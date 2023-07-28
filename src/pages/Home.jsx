import Header from "../components/Header"
import home from '../assets/home.svg'
import style from '../styles/pages/home.module.css'
import SubText from "../components/SubText"
import SubTitle from "../components/SubTitle"
import Text from "../components/Text"
import Title from "../components/Title"
import chat from '../assets/Chat.svg'


const Home = () => {
  return (
    <>
      <Header 
      title='O que é o CyberFriendSpace?'
      img={home}
      />

      <section className={style.section}>
        <SubText
        content='Você já se sentiu vulnerável ou sofreu com o cyberbullying? Sabemos o quanto essa experiência pode ser dolorosa e impactar negativamente a vida das pessoas. No entanto, queremos te apresentar uma iniciativa poderosa chamada CyberFriendSpace, que foi criada com o objetivo de ajudar vítimas de todas as idades a compartilharem suas experiências, se apoiarem mutuamente e construírem uma rede sólida para enfrentar o cyberbullying. Neste texto, vamos explicar como o CyberFriendSpace funciona e a importância de contar com uma rede de apoio nesse cenário.'
        />
        <Title
        content='O que é o CyberFriendSpace?'
        />
        <Text
        content='O CyberFriendSpace é uma plataforma online, acolhedora e segura, onde pessoas que já enfrentaram ou estão enfrentando o cyberbullying podem se conectar. Criamos esse espaço com muito carinho e dedicação para que todos se sintam à vontade para compartilhar suas histórias, desafios e também suas vitórias na luta contra o cyberbullying.
        '
        />
        <Title
        content="A Importância de uma Rede de Apoio"
        />
        <Text 
        content= 'Quando se trata de enfrentar o cyberbullying, a solidão pode ser uma das piores sensações. É fundamental ter alguém ao lado, alguém que compreenda suas emoções e esteja pronto para estender a mão quando você mais precisar. É nesse contexto que a rede de apoio se torna tão importante.'
        />
        <SubTitle 
        content='1.Compreensão mútua:'/> 
        <Text 
        content=' No CyberFriendSpace, você encontrará pessoas que passaram ou estão passando por experiências semelhantes às suas. Essa conexão permite uma compreensão mútua única, eliminando o sentimento de isolamento e proporcionando um ambiente acolhedor e seguro'
        />
        <SubTitle
        content='2.Aprendizado e crescimento:'
        />
        <Text
        content='Compartilhar experiências pode ser transformador. No CyberFriendSpace, você pode aprender com as jornadas de outras pessoas, descobrir estratégias para lidar com o cyberbullying e, assim, fortalecer suas habilidades para enfrentar esse desafio.'

        />
         <SubTitle
        content='3.Empoderamento:'
        />
        <Text
        content='Ser parte de uma rede de apoio como o CyberFriendSpace pode trazer um sentimento poderoso de empoderamento. Quando estamos juntos, somos mais fortes, capazes de enfrentar as adversidades e encontrar maneiras de superar o cyberbullying.'
        />
        <img src={chat} alt="imagem em desenho de duas se comunicando via celular" className={style.img} />
        <Title
        content='Cyberbullying afeta pessoas de todas as idades'
        />
        <Text
        content='O cyberbullying não discrimina. Ele pode afetar crianças, adolescentes, adultos e idosos. Infelizmente, muitas pessoas sofrem caladas, sem saber a quem recorrer ou onde encontrar ajuda. O CyberFriendSpace é inclusivo e acolhe vítimas de todas as idades. Aqui, todos têm espaço para serem ouvidos e apoiados, independentemente da fase da vida em que se encontram.'
        />
        <Title
        content='Junte-se ao CyberFriendSpace hoje mesmo!'
        />
        <Text
        content='Não hesite em se juntar a nós! Visite nosso site e faça parte dessa incrível rede de apoio. Compartilhe suas experiências, ofereça suporte aos outros e descubra como, juntos, podemos fazer a diferença na luta contra o cyberbullying.'
        />
        <SubText
        content='Lembre-se: você é importante, sua voz é poderosa e você merece um ambiente online positivo e seguro. Junte-se ao CyberFriendSpace e faça parte dessa mudança!'
        />
      </section>

    </>
  )
}

export default Home