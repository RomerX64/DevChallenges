import header from "./layoutBoard/header"
import sectionPreview from "./layoutBoard/sectionPreview"



const mainBoard = async(user) => {
    const userId = user._id
    await header(user);
    await sectionPreview(userId);

     
}
export {mainBoard}

