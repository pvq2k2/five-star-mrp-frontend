/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { deleteMovie, getMovieForUpdate, getMovies } from "../api/movie";
import { useMovies, useNotification } from "../hooks";
import ConfirmModal from "./modals/ConfirmModal";
import UpdateMovie from "./modals/UpdateMovie";
import MovieListItem from "./MovieListItem";

const pageNo = 0;
const limit = 5;

export default function LatestUploads() {
  // const [movies, setMovies] = useState([]);
  // const [busy, setBusy] = useState(false);
  // const [showConfirmModal, setShowConfirmModal] = useState(false);
  // const [showUpdateModal, setShowUpdateModal] = useState(false);
  // const [selectedMovie, setSelectedMovie] = useState(null);
  // const { updateNotification } = useNotification();

  const { fetchLastestUploads, latestUploads } = useMovies()

  // const fetchLastestUploads = async () => {
  //   const { error, movies } = await getMovies(pageNo, limit);
  //   if (error) return updateNotification("error", error);

  //   setMovies([...movies]);
  // };

  // const handleOnEditClick = async ({ id }) => {
  //   const { movie, error } = await getMovieForUpdate(id);
  //   setShowUpdateModal(true);

  //   if (error) return updateNotification("error", error);

  //   setSelectedMovie(movie);
  // };

  // const handleOnDeleteClick = (movie) => {
  //   setSelectedMovie(movie);
  //   setShowConfirmModal(true);
  // };

  // const handleOnDeleteConfirm = async () => {
  //   setBusy(true);
  //   const { error, message } = await deleteMovie(selectedMovie.id);
  //   setBusy(false);

  //   if (error) return updateNotification("error", error);
  //   updateNotification("success", message);
  //   hideConfirmModal();
  // };

  // const handleOnUpdate = (movie) => {
  //   const updateMovie = movies.map((m) => {
  //     if (m.id === movie.id) return movie;
  //     return m;
  //   });

  //   setMovies([...updateMovie]);
  // };

  // const hideConfirmModal = () => setShowConfirmModal(false);
  // const hideUpdateModal = () => setShowUpdateModal(false);
  const handleUIUpdate = () => fetchLastestUploads()

  useEffect(() => {
    fetchLastestUploads();
  }, []);
  return (
    <>
      <div className="bg-white shadow dark:shadow dark:bg-secondary p-5 rounded col-span-2">
        <h1 className="font-semibold text-2xl mb-2 text-primary dark:text-white">
          Recent Uploads
        </h1>
        <div className="space-y-3">
          {latestUploads.map((movie) => {
            return (
              <MovieListItem
                movie={movie}
                key={movie.id}
                // onDeleteClick={() => handleOnDeleteClick(movie)}
                // onEditClick={() => handleOnEditClick(movie)}
                afterDelete={handleUIUpdate}
                afterUpdate={handleUIUpdate}
              />
            );
          })}
        </div>
      </div>
      {/* <ConfirmModal
        title="Are you sure?"
        subtitle="This action will remove this movie permanently!"
        visible={showConfirmModal}
        onCancel={hideConfirmModal}
        onConfirm={handleOnDeleteConfirm}
        busy={busy}
      />

      <UpdateMovie
        visible={showUpdateModal}
        onClose={hideUpdateModal}
        onSucces={handleOnUpdate}
        initialState={selectedMovie}
      /> */}
    </>
  );
}
