const mapOptions = {
    center: new naver.maps.LatLng(37.3595704, 127.105399),
    zoom: 10
};

const map = new naver.maps.Map('map', mapOptions);

const data = [
    {
        title: '용산역',
        address: '용산',
        lat: 37.530107579847304,
        lng: 126.96479313805436
    },
    {
        title: '서울역',
        address: '서울역',
        lat: 37.55324891278443,
        lng: 126.97260760696861
    }
];

let markerList = [];
let infowindowList = [];

const getClickHandler = i => () => {
    const infowindow = infowindowList[i];
    infowindow.getMap() ? infowindow.close() : infowindow.open(map, markerList[i]);
};

const getClickMap = i => () => {
    infowindowList[i].close();
};

for (const i in data) {
    const target = data[i];
    const latlng = new naver.maps.LatLng(target.lat, target.lng);
    const marker = new naver.maps.Marker({
        map,
        position: latlng,
        icon: {
            content: `<div class='marker'></div>`,
            anchor: new naver.maps.Point(7.5, 7.5)
        }
    });

    const content = `
    <div class='infowindow_wrap'>
        <div class='infowindow_title'>${target.title}</div>
        <div class='infowindow_address'>${target.address}</div>
    </div>`;

    const infowindow = new naver.maps.InfoWindow({
        content,
        backgroundColor: '#00ff0000',
        borderColor: '#00ff0000',
        anchorSize: new naver.maps.Size(0, 0)
    });

    markerList.push(marker);
    infowindowList.push(infowindow);
}

for (let i = 0, ii = markerList.length; i < ii; i++) {
    naver.maps.Event.addListener(markerList[i], 'click', getClickHandler(i));
    naver.maps.Event.addListener(map, 'click', getClickMap(i));
}