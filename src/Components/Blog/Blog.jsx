import PropTypes from 'prop-types'; 
import { PiBookmarkSimple } from 'react-icons/pi';                              
const Blog = ({blog}) => {
   const {title, cover, author_img, author, posted_date, reading_time, hashtags} = blog;
    return (
        <div className='mb-20'>
            <img className='w-full mb-8' src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between items-center mb-4'>
                <div className='flex items-center gap-10'>
                    <img className='w-14' src={author_img} alt="" />
                    <div>
                        <h4 className='font-bold text-2xl'>{author}</h4>
                        <p className='font-semibold text-base'>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <span>{reading_time} min read</span>
                    <button className='ml-2'><PiBookmarkSimple></PiBookmarkSimple></button>
                </div>
            </div>
           <h2 className="text-4xl font-bold mb-4">{title}</h2>
           <p className='font-medium text-lg mb-4'>
            {
                hashtags.map((hash, idx) => <span key={idx}><a href="">{hash}</a></span>)
            }
           </p>
            <button className='text-[#6047EC] border-b-2'>Mark as read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;