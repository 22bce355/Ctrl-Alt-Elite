import Borrow from "../components/Borrow";
import Fertilizer from "../components/Fertilizer.js";
import Irrigation from "../components/Irrigation";
import LabourCost from "../components/LabourCost";
import Landprepcost from "../components/Landprepcost";
import PlantingCost from "../components/PlantingCost";
import Seedrequire from "../components/Seedrequire.js";

function ExpenseTracker(){
    return(
        <div>
            <Seedrequire></Seedrequire>
            <Fertilizer></Fertilizer>
            <Landprepcost></Landprepcost>
            <PlantingCost></PlantingCost>
            <LabourCost></LabourCost>
            <Irrigation></Irrigation>
            <Borrow></Borrow>
        </div>
    )
}

export default ExpenseTracker;