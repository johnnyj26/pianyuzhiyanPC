import React, {
  Component
} from 'react'
import styles from '../sass/index'
import Swiper from "../../common/components/swiperReact";
import {
  imgServer
} from "../../shared/path.js";
import moment from "moment";
// import {
//   Carousel
// } from 'antd';

class Home extends Component {
  constructor() {
    super()
  }

  render() {
    const {
      homeData,
      actions
    } = this.props;
    return (
      <div className={styles.main}>
                <Swiper params={{
                    pagination: '.swiper-pagination',
                    effect: 'coverflow',
                    grabCursor: true,
                    centeredSlides: true,
                    slidesPerView: 'auto',
                    coverflow: {
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows : true
                    },
                    loop: true,
                    autoplay: 5000
                  }}>
                  {
                      homeData.data.map(function(m,index){
                          return (<div key={index} className={"swiper-slide"}>
                            <img className="swiper-slide-images" src={imgServer+m.picName} width="100%" alt=""/>
                            <div className="swiper-slide-title">
                              <div className="swiper-slide-title-left">
                                {"VOL."+m.id+" "}
                              </div>
                              <div className="swiper-slide-title-right">
                                {m.picAuthor+" 作品"}
                              </div>
                            </div>
                            <div className="swiper-slide-content">{m.words}</div>
                            <div className="swiper-slide-date">{moment(m.uploadDate).format("ddd Do MMM. YYYY")}</div>
                          </div>)
                      })
                  }
                </Swiper>
                {
                // <Carousel autoplay>
                //   <div><h3>1</h3></div>
                //   <div><h3>2</h3></div>
                //   <div><h3>3</h3></div>
                //   <div><h3>4</h3></div>
                // </Carousel>
                }
                
            </div>
    )
  }
}

export default Home