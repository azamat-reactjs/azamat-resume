import './Projects.scss'
import { Section } from '../Section/Section'
import { projects } from '../constants'
import { ReactComponent as ArrowRightLine } from '../../assets/svgs/arrow-right-line.svg'
import { ReactComponent as ArrowRightSLine } from '../../assets/svgs/arrow-right-s-line.svg'
import { ReactComponent as ArrowLeftSLine } from '../../assets/svgs/arrow-left-s-line.svg'
import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

export const Projects = () => {
  return (
    <Section
      classes="projects"
      id="projects"
      title="Projects"
      subtitle="Most recent works"
    >
      <div className="container section__border">
        <div className="projects__container">
          <Swiper
            className="projects__swiper"
            modules={[Navigation, Pagination]}
            grabCursor={true}
            spaceBetween={24}
            slidesPerView={1}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
            }}
            pagination={{
              el: '.swiper-pagination',
              clickable: true
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 24
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 24
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24
              }
            }}
          >
            {projects.map((project) => {
              return (
                <SwiperSlide key={project.key}>
                  <div className="projects__content">
                    {project.image}
                    <div>
                      <span className="projects__subtitle">
                        {project.subtitle}
                      </span>
                      <h1 className="projects__title">{project.title}</h1>
                      <a
                        className="projects__button"
                        href={project.projectUrl}
                        target="_blank"
                      >
                        View demo <ArrowRightLine />
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
          <div className="swiper-pagination"></div>

          <div className="swiper-button-prev">
            <ArrowLeftSLine />
          </div>
          <div className="swiper-button-next">
            <ArrowRightSLine />
          </div>
        </div>
      </div>
    </Section>
  )
}
