export default function getMaterialName(meshName) {
  let materialName;
  switch (meshName) {
    case "Body_front":
      materialName = "paint";
      break;
    case "Body_side":
      materialName = "paint";
      break;
    case "Body_Rear":
      materialName = "paint";
      break;
    case "Body_doorpanel":
      materialName = "paint";
      break;
    case "Int_fabric":
      materialName = "fabric";
      break;
    case "Int_front_mats":
      materialName = "fabric";
      break;
    case "Int_engine_cover":
      materialName = "plastic";
      break;
    case "Int_dash_01":
      materialName = "plastic";
      break;
    case "Int_dash_02":
      materialName = "plastic";
      break;
    case "Int_dash_03":
      materialName = "plastic";
      break;
    case "Int_SW_01":
      materialName = "plastic";
      break;
    case "Int_seats_01":
      materialName = "fabric";
      break;
    case "Int_dash_04":
      materialName = "plastic";
      break;
    case "Int_dash_05":
      materialName = "plastic";
      break;
    case "Int_floor":
      materialName = "fabric";
      break;
    case "Int_shifter_leather":
      materialName = "fabric";
      break;
    case "Int_console_01":
      materialName = "plastic";
      break;
    case "Int_seats_02":
      materialName = "fabric";
      break;
    case "Int_mats_02":
      materialName = "fabric";
      break;
    case "Int_side_cover":
      materialName = "plastic";
      break;
    case "Int_console_02":
      materialName = "plastic";
      break;
    case "Glass_headlights":
      materialName = "glass";
      break;
    case "Glass_F_Bulbs":
      materialName = "glass";
      break;
    case "Glass_front":
      materialName = "glass";
      break;
    case "Glass_Int_01":
      materialName = "glass";
      break;
    case "Glass_rear":
      materialName = "glass";
      break;
    case "Glass_gauges":
      materialName = "glass";
      break;
    case "Glass_TL_03":
      materialName = "glass";
      break;
    case "Glass_TL_01":
      materialName = "glass";
      break;
    case "Glass_TL_02":
      materialName = "glass";
      break;
    case "Glass_gauges_02":
      materialName = "glass";
      break;
    case "Glass_HL_02":
      materialName = "glass";
      break;
    case "Glass_HL_01":
      materialName = "glass";
      break;
    case "Glass_HL_03":
      materialName = "glass";
      break;
    case "Logos_Quadrifoglio":
      materialName = "metal";
      break;
    case "Logos_Autodelta":
      materialName = "metal";
      break;
    case "Logos_Alfa_front":
      materialName = "metal";
      break;
    case "Logos__license_rear":
      materialName = "metal";
      break;
    case "Logos_Alfa_rear":
      materialName = "metal";
      break;
    case "Logos_SW":
      materialName = "metal";
      break;
    case "Metal_front_logo":
      materialName = "metal";
      break;
    case "Metal_fuel_cap":
      materialName = "metal";
      break;
    case "Metal_windows_frames":
      materialName = "metal";
      break;
    case "Metal_alfa_romeo":
      materialName = "metalRough";
      break;
    case "Metal_HL_ref":
      materialName = "metal";
      break;
    case "Int_mirror_02":
      materialName = "metal";
      break;
    case "Metal_Handbrake":
      materialName = "metal";
      break;
    case "Int_shifter_03":
      materialName = "plastic";
      break;
    case "Metal_gauges_frames":
      materialName = "metal";
      break;
    case "Int_console_switches":
      materialName = "plastic";
      break;
    case "Metal_HL_frame":
      materialName = "metal";
      break;
    case "Metal_wiper_01":
      materialName = "metal";
      break;
    case "Metal_wiper_02":
      materialName = "metal";
      break;
    case "Metal_F_bulbs":
      materialName = "metal";
      break;
    case "Metal_Brake_calipers":
      materialName = "metal";
      break;
    case "Metal_brake_discs":
      materialName = "metal";
      break;
    case "Metal_engine":
      materialName = "metal";
      break;
    case "Int_belts_frame":
      materialName = "plastic";
      break;
    case "Int_gauges_strip":
      materialName = "plastic";
      break;
    case "Int_keyhole":
      materialName = "metal";
      break;
    case "Int_console_03":
      materialName = "plastic";
      break;
    case "Int_dash_stick":
      materialName = "plastic";
      break;
    case "Metal_steering":
      materialName = "metal";
      break;
    case "Int_SW_bolts":
      materialName = "metal";
      break;
    case "Int_dash_key":
      materialName = "metal";
      break;
    case "Metal_bolts":
      materialName = "metal";
      break;
    case "Metal_rear_bulbs":
      materialName = "metal";
      break;
    case "Metal_HL_ref_2":
      materialName = "metal";
      break;
    case "Metal_F_suspension":
      materialName = "metal";
      break;
    case "Metal_HL_03":
      materialName = "metal";
      break;
    case "Metal_eng_injector":
      materialName = "metal";
      break;
    case "Metal_eng_shadow":
      materialName = "metal";
      break;
    case "Metal_transmission":
      materialName = "metal";
      break;
    case "Metal_exhaust":
      materialName = "metal";
      break;
    case "Metal_clutch_bolt":
      materialName = "metal";
      break;
    case "Int_mirror_03":
      materialName = "metal";
      break;
    case "Int_console_04":
      materialName = "plastic";
      break;
    case "Int_pedals":
      materialName = "metal";
      break;
    case "Metal_steering_box":
      materialName = "metal";
      break;
    case "Int_lights_ref":
      materialName = "glass";
      break;
    case "Metal_TL_housing":
      materialName = "metal";
      break;
    case "Plastic_Grille_front":
      materialName = "plastic";
      break;
    case "Plastic_HL_housing_02":
      materialName = "plastic";
      break;
    case "Plastic_HL_housing":
      materialName = "plastic";
      break;
    case "Plastic_HL_housing_03":
      materialName = "plastic";
      break;
    case "Plastic_Grille_hood":
      materialName = "plastic";
      break;
    case "Plastic_Grille_side":
      materialName = "plastic";
      break;
    case "Plastic_Grille_rear_02":
      materialName = "plastic";
      break;
    case "Plastic_Grille_rear":
      materialName = "plastic";
      break;
    case "Plastic_TL_housing":
      materialName = "plastic";
      break;
    case "Int_frame":
      materialName = "metal";
      break;
    case "Int_mirror_01":
      materialName = "plastic";
      break;
    case "Int_shifter_02":
      materialName = "metal";
      break;
    case "Int_gauges_plastic":
      materialName = "plastic";
      break;
    case "Int_gauges":
      materialName = "metal";
      break;
    case "Plastic_Wheel_arc_front":
      materialName = "plastic";
      break;
    case "Plastic_Wheel_arch_rear":
      materialName = "plastic";
      break;
    case "Headlights_housing004":
      materialName = "metal";
      break;
    case "Plastic_wiper_motor":
      materialName = "plastic";
      break;
    case "Plastic_wiper_shadow":
      materialName = "plastic";
      break;
    case "Plastic_Frame_front":
      materialName = "plastic";
      break;
    case "Plastic_wiper":
      materialName = "plastic";
      break;
    case "Plastic_Frame_rear":
      materialName = "plastic";
      break;
    case "Plastic_rear_glass_pins":
      materialName = "plastic";
      break;
    case "Plastic_Diff_rear":
      materialName = "plastic";
      break;
    case "Int_F_Frame_rubber":
      materialName = "rubber";
      break;
    case "Int_door_rubber":
      materialName = "rubber";
      break;
    case "Int_gauges_frame":
      materialName = "metal";
      break;
    case "Int_pedals_rubber":
      materialName = "rubber";
      break;
    case "Plastic_Shadow_planes":
      materialName = "plastic";
      break;
    case "Metal_pistons":
      materialName = "metal";
      break;
    case "Headlights_housing005":
      materialName = "metal";
      break;
    case "Plastic_engine_cover":
      materialName = "plastic";
      break;
    case "Wheels_bolts_01":
      materialName = "metal";
      break;
    case "Wheels_rim_01":
      materialName = "metal";
      break;
    case "Wheels_tire_01":
      materialName = "rubberTire";
      break;
    case "Wheels_valve_01":
      materialName = "metal";
      break;
    case "Wheels_bolts_02":
      materialName = "metal";
      break;
    case "Wheels_rim_02":
      materialName = "metal";
      break;
    case "Wheels_tire_02":
      materialName = "rubberTire";
      break;
    case "Wheels_valve_02":
      materialName = "metal";
      break;
    case "Wheels_bolts_03":
      materialName = "metal";
      break;
    case "Wheels_rim_03":
      materialName = "metal";
      break;
    case "Wheels_tire_03":
      materialName = "rubberTire";
      break;
    case "Wheels_valve_03":
      materialName = "metal";
      break;
    case "Wheels_bolts_04":
      materialName = "metal";
      break;
    case "Wheels_rim_04":
      materialName = "metal";
      break;
    case "Wheels_tire_04":
      materialName = "rubberTire";
      break;
    case "Wheels_valve_04":
      materialName = "metal";
      break;
    case "Body_doors_R":
      materialName = "paint";
      break;
    case "Glass_doors_R":
      materialName = "glass";
      break;
    case "Glass_window_R":
      materialName = "glass";
      break;
    case "Glass_windowframe_R":
      materialName = "metal";
      break;
    case "Int_door_handle_R":
      materialName = "metal";
      break;
    case "Int_door_panel_R":
      materialName = "plastic";
      break;
    case "Metal_bolts_door_R":
      materialName = "metal";
      break;
    case "Metal_bolts_door_R001":
      materialName = "metal";
      break;
    case "Metal_door_hinges_outside_R":
      materialName = "metal";
      break;
    case "Metal_door_hinges_R":
      materialName = "metal";
      break;
    case "Metal_door_strip_R":
      materialName = "metal";
      break;
    case "Metal_DoorHandles_R":
      materialName = "metal";
      break;
    case "Metal_windows_door_R":
      materialName = "glass";
      break;
    case "Body_doors_L":
      materialName = "paint";
      break;
    case "Glass_doors_L":
      materialName = "glass";
      break;
    case "Glass_window_L":
      materialName = "glass";
      break;
    case "Glass_windowframe_L":
      materialName = "metal";
      break;
    case "Int_door_handle_L":
      materialName = "metal";
      break;
    case "Int_door_panel_L":
      materialName = "plastic";
      break;
    case "Metal_bolts_door_L":
      materialName = "metal";
      break;
    case "Metal_bolts_door_L001":
      materialName = "metal";
      break;
    case "Metal_door_hinges_L":
      materialName = "metal";
      break;
    case "Metal_door_hinges_outside_L":
      materialName = "metal";
      break;
    case "Metal_door_strip_L":
      materialName = "metal";
      break;
    case "Metal_DoorHandles_L":
      materialName = "metal";
      break;
    case "Metal_windows_door_L":
      materialName = "glass";
      break;
    default:
      materialName = "default";
      break;
  }

  return materialName;
}
