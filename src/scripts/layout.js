class Layout {
  constructor(startingPos, structureCb, winZone, failZonesArr) {
    this.startingPos = startingPos;
    this.structureCb = structureCb;
    this.winZone = winZone;
    this.failZone = failZonesArr;
  }
}

export default Layout;