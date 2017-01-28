const toRadians = (angle) => {
  return angle * (Math.PI / 180);
}

const positionToCoordinates = (position) => {
  const r = 220
  const angle = (position + 1) * 36
  let angleAsRadians
  if (angle <= 90) {
    angleAsRadians = toRadians(angle)
    return {
      x: Math.cos(angleAsRadians) * r,
      y: Math.sin(angleAsRadians) * r,
    }
  }
  if (angle <= 180) {
    angleAsRadians = toRadians(180 - angle)
    return {
      x: -1 * Math.cos(angleAsRadians) * r,
      y: Math.sin(angleAsRadians) * r,
    }
  }
  if (angle <= 270) {
    angleAsRadians = toRadians(angle - 180)
    return {
      x: -1 * Math.cos(angleAsRadians) * r,
      y: -1 * Math.sin(angleAsRadians) * r,
    }
  }
  angleAsRadians = toRadians(360 - angle)
  return {
    x: Math.cos(angleAsRadians) * r,
    y: -1 * Math.sin(angleAsRadians) * r,
  }
}

export default positionToCoordinates;