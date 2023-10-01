import App from '../App'

export const HomeBlogs = () => {
  return (
    <div className='parent-blog-posts'>
      <h1 className='main-title text-center mb-5 mt-2'>All Blogs Review</h1>

      {/* Blogs right Here */}
      <div className='blogs'>
        <div className='blog'>
          <div className='blog-sections-content'>
            <div className='blog-heading'>
              <h3 className='title-blog'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit...
              </h3>
            </div>
            <div className='blog-image'>
              <img
                className='img-blog'
                src='https://media.istockphoto.com/id/537837754/photo/orange-juice-splash.jpg?s=612x612&w=0&k=20&c=twbr5N3vTUl9Qw_cerGXX9zQlkTVa7ICatdUqyxgsvg='
                alt='juice'
              />
            </div>
          </div>
          <div className='extra-info'>
            <button className='read-blog text-info bg-success text-white'>
              More information about Blog
            </button>
            <button className='delete-blog bg-danger text-light'>
              Delete this Blog
            </button>
            <p className='author'>
              <span className='by-author'>Written by: </span>
              Alexander Anderson
            </p>
            <p className='date-created'>Created: 14/02/2019</p>
          </div>
        </div>

        <div className='blog'>
          <div className='blog-sections-content'>
            <div className='blog-heading'>
              <h3 className='title-blog'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Repellendus...
              </h3>
            </div>
            <div className='blog-image'>
              <img
                className='img-blog'
                src='https://assets.epicurious.com/photos/63696b57dee3198aab85f32b/1:1/w_4295,h_4295,c_limit/BanoffeePie_RECIPE_110222_41581.jpg'
                alt='pie'
              />
            </div>
          </div>
          <div className='extra-info'>
            <button className='read-blog text-info bg-success text-white'>
              More information about Blog
            </button>
            <button className='delete-blog bg-danger text-light'>
              Delete this Blog
            </button>
            <p className='author'>
              <span className='by-author'>Written by: </span>
              Alexander Anderson
            </p>
            <p className='date-created'>Created: 19/04/2021</p>
          </div>
        </div>
      </div>
    </div>
  )
}
