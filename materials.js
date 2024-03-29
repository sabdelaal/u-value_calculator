// Define U-values for different materials
var uValues = {
    "Acoustic Tile": 0.06,
    "Air, atmosphere (gas)": 0.0262,
    "Aircrete, Aerated Concrete Block": 0.11,
    "Argon (gas)": 0.016,
    "Asphalt": 0.75,
    "Balsa wood": 0.048,
    "Bitumen": 0.17,
    "Bitumen/felt layers": 0.5,
    "Brick dense": 1.31,
    "Brick, fire": 0.47,
    "Brick, insulating": 0.15,
    "Brickwork, common (Building Brick)": 0.8,
    "Brickwork, dense": 1.6,
    "Cellulose acetate, molded, sheet": 0.25,
    "Cellulose, cotton, wood pulp and regenerated": 0.23,
    "Cement, mortar": 1.73,
    "Cement, Portland": 0.29,
    "CLT": 0.13,
    "Concrete blocks (heavyweight)": 1.63,
    "Concrete blocks (insulating)": 0.15,
    "Concrete blocks (lightweight)": 0.38,
    "Concrete blocks (medium weight)": 0.8,
    "Concrete, dense": 1.4,
    "Concrete, lightweight": 0.2,
    "Concrete, medium": 0.55,
    "Concrete, stone": 1.7,
    "Cork": 0.07,
    "Cork board": 0.043,
    "Cork, re-granulated": 0.044,
    "Cotton": 0.04,
    "Cotton Wool insulation": 0.029,
    "Earth, dry": 1.5,
    "Felt insulation": 0.04,
    "Fiber insulating board": 0.048,
    "Fiberglass": 0.04,
    "Fire-clay brick 500oC": 1.4,
    "Glass": 1.05,
    "Glass wool Insulation": 0.04,
    "Glass, window": 0.96,
    "Ground or soil, dry area": 0.5,
    "Ground or soil, moist area": 1,
    "Ground or soil, very dry area": 0.33,
    "Ground or soil, very moist area": 1.4,
    "Gypsum board": 0.17,
    "Hairfelt": 0.05,
    "Hardboard high density": 0.15,
    "Hardwoods (oak, maple..)": 0.16,
    "Hempcrete": 0.25,
    "Insulation materials": 0.04,
    "Kapok insulation": 0.034,
    "Limestone": 1.3,
    "Mineral wool insulation materials, wool blankets": 0.04,
    "Particle board (high density)": 0.17,
    "Particle board (low density)": 0.08,
    "Phenolic foam (PIR)": 0.02,
    "Plaster, gypsum standard": 0.46,
    "Plaster light": 0.2,
    "Plaster, metal lath": 0.47,
    "Plaster, sand": 0.71,
    "Plaster, wood lath": 0.28,
    "Plasterboard": 0.16,
    "Plastics, foamed (insulation materials)": 0.03,
    "Plywood": 0.13,
    "Polycarbonate": 0.19,
    "Polyester": 0.05,
    "Polyethylene high density, PEH": 0.462,
    "Polyethylene low density, PEL": 0.33,
    "Polyisoprene hard rubber": 0.16,
    "Polyisoprene natural rubber": 0.13,
    "Polymethylmethacrylate": 0.21,
    "Polypropylene, PP": 0.16,
    "Polystyrene, expanded / styrofoam": 0.03,
    "Polystyrol": 0.043,
    "Polytetrafluoroethylene (PTFE)": 0.25,
    "Polyurethane foam": 0.03,
    "Polyvinylchloride, PVC": 0.19,
    "Radon (gas)": 0.0033,
    "Render (sand/cement)": 0.5,
    "Rock Wool insulation": 0.045,
    "Sand, dry": 0.2,
    "Sand, moist": 0.225,
    "Sand, saturated": 3,
    "Sandstone": 1.7,
    "Sawdust": 0.08,
    "Screed (cement/sand)": 0.41,
    "Sheep wool": 0.039,
    "Silica aerogel": 0.02,
    "Silicon cast resin": 0.235,
    "Softwoods (fir, pine ..)": 0.12,
    "Soil, clay": 1.1,
    "Soil, saturated": 2.2,
    "Soil, with organic matter": 0.175,
    "Steel": 40,
    "Stone (granite)": 3,
    "Stone (limestone)": 1.3,
    "Stone (sandstone)": 1.5,
    "Straw bale": 0.09,
    "Straw slab insulation, compressed": 0.09,
    "Styrofoam": 0.033,
    "Tiles (clay)": 0.85,
    "Tiles (concrete)": 1.1,
    "Timber, alder": 0.17,
    "Timber, ash": 0.16,
    "Timber, birch": 0.14,
    "Timber, larch": 0.12,
    "Timber, maple": 0.16,
    "Timber, oak": 0.17,
    "Timber, pitchpine": 0.14,
    "Timber, pockwood": 0.19,
    "Timber, red beech": 0.14,
    "Timber, red pine": 0.15,
    "Timber, walnut": 0.15,
    "Timber, white pine": 0.15,
    "Water": 0.606,
    "Wood across the grain, balsa": 0.055,
    "Wood across the grain, white pine": 0.12,
    "Wood across the grain, yellow pine, timber": 0.147,
    "Wood wool, slab": 0.12,
    "Wood, oak": 0.17,
    "woodfibre board": 0.11,
    "Wool, felt": 0.07, 
                        };
