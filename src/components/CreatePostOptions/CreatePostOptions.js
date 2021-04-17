import styles from "./createPostOptions.module.css";
import CreatePostFileOption from '../CreatePostFileOption/CreatePostFileOption';
import { FileOptionsData, LinkOptionData } from '../../data/CreatePostOptionsData';
import CreatePostLinkOption from '../CreatePostLinkOption/CreatePostLinkOption';


const  CreatePostOptions = () => (
    <div className={styles.inputOptions}>
        
        {FileOptionsData.map( (element,index)=> (
            <CreatePostFileOption 
                key={index}
                title={element.title}
                Icon={element.Icon}
                color={element.color}
                accepts={element.accept}
                validation={element.validation}
                type={element.type}/>
        ))}
        {LinkOptionData.map( (element,index)=> (
            <CreatePostLinkOption 
            key={index}
            title={element.title}
            Icon={element.Icon}
            color={element.color}/>
        ))}
    </div>
)

export default CreatePostOptions;