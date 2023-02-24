// // import React, { useEffect, useState } from 'react';
// // import { useLocation, useParams } from 'react-router-dom';

// // // import CommentsPage from 'pages/Comments/CommentsPage';
// // import Loader from 'components/Loader/Loader';

// // import { requestPostDetails } from 'services/api';

// // function PostDetailsPage() {
// //   const { postId } = useParams();
// //   const location = useLocation();
// //   console.log('PostDetailsPage location: ', location);

// //   const [details, setDetails] = useState(null);
// //   const [isLoading, setIsLoading] = useState(false);
// //   const [error, setError] = useState(null);

// //   useEffect(() => {
// //     async function fetchPostDetails(postId) {
// //       try {
// //         setIsLoading(true);

// //         const details = await requestPostDetails(postId);

// //         setDetails(details);
// //       } catch (error) {
// //         setError(error.message);
// //       } finally {
// //         setIsLoading(false);
// //       }
// //     }

// //     fetchPostDetails(postId);
// //   }, [postId]);

// //   const isCommentsVisible = location.pathname.includes('comments');
// //   return (
// //     <div>
// //       {isLoading && <Loader />}
// //       {error !== null && <p>Oops, some error occured... Message: {error}</p>}
// //       <Link to={location.state?.from ?? '/'}>Go back</Link>
// //       <h1>PostDetails</h1>
// //       <br />
// //       Current postId: {postId}
// //       {Boolean(details) && (
// //         <div>
// //           <p>
// //             <b>Title:</b> {details.title}
// //           </p>
// //           <p>
// //             <b>Body:</b> {details.body}
// //           </p>
// //         </div>
// //       )}
// //       <NavLink
// //         state={{ from: location.state?.from ?? '/' }}
// //         to={isCommentsVisible ? '' : 'comments'}
// //       >
// //         Comments
// //       </NavLink>
// //       <Suspense fallback={<Loader />}>
// //         <Routes>
// //           <Route path="comments" element={<LazyCommentsPage />} />
// //         </Routes>
// //       </Suspense>
// //     </div>
// //   );
// // }

// // export default PostDetailsPage;
// import { useEffect, useState } from 'react';
// import { useParams, useLocation, Outlet } from 'react-router-dom';
// import { requestMovieById } from 'services/api';
// import { Details } from 'components/MovieDetails/MovieDetails';
// import {
//   ButtonBack,
//   DetailsTitle,
//   InfoLink,
// } from 'components/MovieDetails/MovieDetails.styled';
// import { Loader } from 'components/Loader/Loader';

// const MoviesDetailsPage = () => {
//   const [movieDetails, setMovieDetails] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const { movieId } = useParams();
//   const location = useLocation();
//   const [error, setError] = useState('');

//   const backLink = location.state?.from;

//   useEffect(() => {
//     if (!movieId) return;
//     const getMovieById = async movieId => {
//       try {
//         setLoading(true);
//         const movieDetails = await requestMovieById(movieId);

//         setMovieDetails(movieDetails);
//         setError('');
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };
//     getMovieByI(movieId);
//   }, [movieId]);

//   return (
//     <>
//       {movieDetails && !loading && !error && (
//         <div>
//           <ButtonBack to={backLink}>Go back</ButtonBack>
//           <Details movieDetails={movieDetails} />
//           <div>
//             <DetailsTitle>Additional information</DetailsTitle>

//             <InfoLink to="cast" state={{ from: backLink }}>
//               Cast
//             </InfoLink>
//             <InfoLink to="reviews" state={{ from: backLink }}>
//               Reviews
//             </InfoLink>

//             <Outlet />
//           </div>
//         </div>
//       )}
//       {loading && !error && <Loader />}
//     </>
//   );
// };

// export default MoviesDetailsPage;
