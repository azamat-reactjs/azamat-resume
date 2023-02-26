import './Qualification.scss'
import { qualificationInfos, qualificationInfos2 } from '../constants'
import { ReactComponent as PencilRuler2Line } from '../../assets/svgs/pencil-ruler-2-line.svg'
import { ReactComponent as BuildingLine } from '../../assets/svgs/building-line.svg'
import { ReactComponent as ShapeCircle } from '../../assets/svgs/shape-circle.svg'

export const Qualification = () => {
  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">Experience and education</span>

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
    </section>
  )
}
