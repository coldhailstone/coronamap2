const mapOptions = {
    center: new naver.maps.LatLng(37.3595704, 127.105399),
    zoom: 10
};

const map = new naver.maps.Map('map', mapOptions);

const data = [
    {
        title: "용산역",
        address: "용산",
        lat: 37.530107579847304,
        lng: 126.96479313805436
    },
    {
        title: "서울역",
        address: "서울역",
        lat: 37.55324891278443,
        lng: 126.97260760696861
    }
];

for (const i in data) {
    const target = data[i];
    const latlng = new naver.maps.LatLng(target.lat, target.lng);
    const marker = new naver.maps.Marker({
        map,
        position: latlng,
        icon: {
            content: `<div class='marker'></div>`
        }
    });
}