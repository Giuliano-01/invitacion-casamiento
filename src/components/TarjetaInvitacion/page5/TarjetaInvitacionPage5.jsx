import PageSection from '../components/Layouts/PageSection'
import Section from '../components/Layouts/Section'
import { GalleryContainer, GalleryImg } from './styles'
import GllyImg1 from './todas/0.jpg'
import GllyImg2 from './todas/1.jpg'
import GllyImg3 from './todas/4.jpg'
import GllyImg4 from './todas/7.jpg'
import GllyImg5 from './todas/8.jpg'
import GllyImg6 from './todas/22.jpg'
import GllyImg7 from './todas/26.jpg'
import GllyImg8 from './todas/28.jpg'
import GllyImg9 from './todas/29.jpg'
import { useImageOpen } from '../../../hooks/useImageOpen'

const TarjetaInvitacionPage5 = () => {
  
  const { isImageOpen, imageOpenOpen} = useImageOpen()

  const expandImg = (e)=>{
    console.log(e)
    imageOpenOpen(e.target.attributes.src.value)
  }

  return (
    <PageSection fitContent>
      <Section>
        <GalleryContainer>
          <GalleryImg src={GllyImg1} onClick={(e)=> expandImg(e)}/>
          <GalleryImg src={GllyImg3} onClick={(e)=> expandImg(e)}/>
          <GalleryImg src={GllyImg5} onClick={(e)=> expandImg(e)}/>
          <GalleryImg src={GllyImg6} onClick={(e)=> expandImg(e)}/>
          <GalleryImg src={GllyImg7} onClick={(e)=> expandImg(e)}/>
          <GalleryImg src={GllyImg8} onClick={(e)=> expandImg(e)}/>
          <GalleryImg src={GllyImg4} onClick={(e)=> expandImg(e)}/>
          <GalleryImg src={GllyImg2} onClick={(e)=> expandImg(e)}/>
          <GalleryImg src={GllyImg9} onClick={(e)=> expandImg(e)}/>
        </GalleryContainer> 
      </Section>
    </PageSection>
  )
}

export default TarjetaInvitacionPage5