class Park {
  constructor(floors = []) {
    this.floors = floors
    this.camera = new Camera()
    this.screen = new Screen()
    this.carList = {}
  }

  in(car) {
    // 摄像头记录
    const carInfo = this.camera.shot(car)

    // 停的楼层
    const randomFloor = Math.floor(Math.random() * 3)
    // 停的车位
    const randomPlace = Math.floor(Math.random() * 100)

    // 车位
    const place = this.floors[randomFloor].places[randomPlace]

    // 入库
    place.in()
    carInfo.place = place

    // 记录
    this.carList[car.num] = carInfo
  }

  out(car) {
    // 获取信息
    const { place, inTime } = this.carList[car.num]
    // 清空车位
    place.out()

    // 清除车辆
    delete this.carList[car.num]

    // 展示信息
    this.screen.show(car, inTime)
  }

  showEmptyPlaces() {
    this.floors.forEach((floor) => {
      console.log(
        `第${floor.index + 1}层目前剩余车位：${floor.showEmptyPlaces()}`,
      )
    })
  }
}

class Car {
  constructor(num) {
    this.num = num
  }
}

class Floor {
  constructor(index, places = []) {
    this.index = index
    this.places = places
  }

  showEmptyPlaces() {
    return this.places.filter((place) => place.isEmpty).length
  }
}

class Place {
  constructor(isEmpty = true) {
    this.isEmpty = isEmpty
  }

  in() {
    this.isEmpty = false
  }

  out() {
    this.isEmpty = true
  }
}

class Camera {
  shot(car) {
    return {
      num: car.num,
      inTime: Date.now(),
    }
  }
}

class Screen {
  show(car, inTime) {
    console.log(`当前车牌号：${car.num}\n停车时长：${Date.now() - inTime}`)
  }
}

// 搞定楼层
const floors = []
for (let i = 0; i < 3; i++) {
  // 搞定100个停车位
  const places = []
  for (let i = 0; i < 100; i++) {
    places.push(new Place())
  }
  floors.push(new Floor(i, places))
}

// 初始化一个停车场
const park = new Park(floors)

const carNumBase = 'ABCDEFG'

// 每 10s 进来一辆车
setInterval(() => {
  const carNum =
    carNumBase.charAt(Math.floor(Math.random() * carNumBase.length)) +
    Math.floor(Math.random() * 1000)
  const car = new Car(carNum)

  console.log(`恭喜车牌号的车辆${car.num}进入`)
  console.log(park.showEmptyPlaces())

  park.in(car)

  // 20s 后该车走了
  setTimeout(() => {
    console.log(`恭喜车牌号的车辆${car.num}滚蛋了`)
    park.out(car)
  }, 20000)
}, 10000)
