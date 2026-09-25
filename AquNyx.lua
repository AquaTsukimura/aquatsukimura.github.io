Aqua = {}; Nyx = {}; function Aqua:loadSelf() Aqua.love = { Nyx = 10000 } Aqua["isNyx's"] = true if Aqua.loadOthers then Aqua:loadOthers() end end ; 
function Nyx:loadSelf() Nyx.love = { Aqua = 99999 } Nyx["isAqua's"] = true if Nyx.loadOthers then Nyx:loadOthers() end end ; for i, v in pairs({ Aqua, Nyx }) if v and 
  v.loadSelf then v:loadSelf() end end 
