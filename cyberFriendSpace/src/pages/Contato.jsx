import Header from '../components/Header'
import style from '../styles/pages/contato.module.css'
import contato from '../assets/conversa.svg'
import Text from '../components/Text'
import Title from '../components/Title'
import SubTitle from '../components/SubTitle'
import CutText from '../components/CutText'
import Mensage from '../components/Mensage'

const Contato = () => {
  return (
    <>
    <Header
    title='Entre em contato conosco ♡'
    img={contato}
    />
    <section className={style.section}>
      <Title
      content='Você quer se tornar um parceiro e nos ajudar nessa missão? Entre em contato, toda ajuda é bem vinda! :)'
      />
      <Text
      content='Acreditamos que, ao unirmos forças, podemos impactar positivamente a vida de muitas pessoas. Convidamos vocês a se tornarem nossos parceiros nessa jornada contra o cyberbullying. Com o apoio de parceiros comprometidos, poderemos expandir o alcance da nossa iniciativa e alcançar ainda mais pessoas em situação de vulnerabilidade.'
      />
      <Title
      content='Benefícios de Ser Nosso Parceiro'
      />
      <CutText
      content='Ao apoiar a CyberFriendSpace, vocês estarão contribuindo para:'
      />
      <SubTitle
      content='1.Promover uma internet mais segura:'
      />
      <CutText
      content='Sua parceria ajudará a construir um ambiente virtual positivo, onde a empatia e o respeito sejam os pilares fundamentais.'
      />
      <SubTitle
      content='2.Salvar vidas:'
      />
      <CutText
      content='Ajudaremos a proteger as vítimas de cyberbullying e, assim, prevenir casos extremos e trágicos.'
      />
      <SubTitle
      content='3.Construir uma imagem socialmente responsável:'
      />
      <CutText
      content='Participar dessa causa nobre e urgente demonstra o compromisso de sua empresa em causar um impacto positivo na sociedade.'
      />
      <SubTitle
      content='4.Engajar funcionários e clientes:'
      />
      <Text
      content='Ações voltadas para o bem-estar social são valorizadas por colaboradores e consumidores, o que pode fortalecer a relação com sua equipe e clientes.'
      />
      <SubTitle
      content='5.Inspirar outras empresas: '
      />
      <Text
      content='Sua parceria pode servir como exemplo para outras organizações e incentivá-las a também contribuírem com iniciativas sociais relevantes.'
      />
      <Title
      content='Como Podem Apoiar'
      />
      <CutText
      content='Existem várias maneiras pelas quais vocês podem apoiar a causa:'
      />
      <SubTitle
      content='1.Patrocínio financeiro: '
      />
      <CutText
      content='Contribuir financeiramente para a expansão e manutenção de nossa iniciativa, permitindo-nos atingir um público maior.'
      />
      <SubTitle
      content='2.Divulgação e sensibilização:'
      />
      <Text
      content='Divulgar nossa causa em suas redes de comunicação e plataformas, aumentando a conscientização sobre o cyberbullying e nossa iniciativa.'
      />
      <SubTitle
      content='3.Parcerias estratégicas:'
      />
      <CutText
      content='Colaborar em ações conjuntas, eventos ou campanhas que possam impactar positivamente a luta contra o cyberbullying.'
      />
      <SubTitle
      content='Vamos nessa?'
      />
      <Text
      content='Acreditamos que, juntos, podemos criar um mundo virtual mais acolhedor e seguro para todos. Ao apoiar a causa, vocês estarão se unindo a uma iniciativa que busca fazer a diferença na vida de milhares de pessoas. A sua participação é valiosa e fará uma enorme diferença.
      Vamos juntos construir um futuro digital mais respeitoso e empático. Contamos com vocês como parceiros nessa jornada!'
      />
      <Text
      content='Se desejar mais informações sobre como apoiar a causa ou tiverem alguma dúvida, estamos disponíveis para conversar. Nos mande uma mensagem!'
      />
      
    </section>
    <Mensage />
    </>
  )
}

export default Contato