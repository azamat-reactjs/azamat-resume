import './Qualification.scss'
import { qualificationInfos, qualificationInfos2 } from '../constants'
import { ReactComponent as PencilRuler2Line } from '../../assets/svgs/pencil-ruler-2-line.svg'
import { ReactComponent as BuildingLine } from '../../assets/svgs/building-line.svg'
import { ReactComponent as ShapeCircle } from '../../assets/svgs/shape-circle.svg'
import { Section } from '../Section/Section'

export const Qualification = () => {
  return (
    <Section
      classes="qualification"
      id="qualification"
      title="Qualification"
      subtitle="Experience and education"
    >
      <div className="qualification__container container section__border">
        <div className="qualification__content">
          <h3 className="qualification__title">
            <PencilRuler2Line /> Education
          </h3>
          <div className="qualification__info">
            {qualificationInfos.map((qualificationInfo) => {
              return (
                <div key={qualificationInfo.key}>
                  <h3 className="qualification__name">
                    {qualificationInfo.name}
                  </h3>
                  <span className="qualification__country">
                    {qualificationInfo.country}
                  </span>
                  <span className="qualification__year">
                    {qualificationInfo.year}
                  </span>
                </div>
              )
            })}
          </div>
        </div>

        <div className="qualification__content">
          <h3 className="qualification__title">
            <BuildingLine /> Work
          </h3>
          <div className="qualification__info">
            {qualificationInfos2.map((qualificationInfo) => {
              return (
                <div key={qualificationInfo.key}>
                  <h3 className="qualification__name">
                    {qualificationInfo.name}
                  </h3>
                  <span className="qualification__country">
                    {qualificationInfo.country}
                  </span>
                  <span className="qualification__year">
                    {qualificationInfo.year}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <ShapeCircle className="qualification__shape-circle" />
    </Section>
  )
}
