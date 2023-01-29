import React from 'react'
import { YMaps, Map, Placemark, Clusterer} from '@pbe/react-yandex-maps'
import './Maps.css'

function Maps({list}) {
    const API_key = '16699af3-e803-438d-9183-1605c6422fe3'
  return (
    <YMaps query={{ lang: 'en_RU', apikey: API_key }}>  
          <Map className='yandex_map'  
          defaultState={{
          center: [55.78, 49.12],
          zoom: 3,
          controls: ["zoomControl", "fullscreenControl"],
          }}
          modules={["control.ZoomControl", "control.FullscreenControl"]}
        >
          {/* <Clusterer
            options={{
              preset: "islands#invertedVioletClusterIcons",
              groupByCoordinates: false,
              
            }}
          > */}
            {list.map(item => 
                    <Placemark
                    key={item.id}
                    geometry={item.point}
                    defaultProperties={{
                      hintContent: item.title,
                      balloonContentBody: item.title
                    }}
                    properties={{
                      hintContent: item.title,
                      balloonContentBody: item.title
                    }}
                    options={{
                      iconColor: item.pointColor,
                      preset: 'islands#blackStretchyIcon',
                      draggable: true,
                      hasBalloon: true,
                      hasHint: true,
                      openBalloonOnClick: true,
                    }}
                  />
              )}
          {/* </Clusterer> */}
        </Map>
      </YMaps>  
  )
}

export default Maps