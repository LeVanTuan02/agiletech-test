import React from "react";

type Props = {};

const AddPost = (props: Props) => {
  return (
    <div>
      <h1 className="font-medium text-2xl uppercase text-center block mb-10">Thêm bài viết mới</h1>

      <form action="">
        <div className="mb-3">
          <label htmlFor="form__add-post-title" className="block font-medium text-gray-700">
            Tiêu đề bài viết
          </label>
          <input
            type="text"
            name="form__add-post-title"
            id="form__add-post-title"
            className="py-2 px-3 mt-1 border focus:ring-primary focus:border-primary focus:outline-none block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            placeholder="Nhập tiêu đề bài viết"
          />
          <span className="text-sm mt-2 text-red-500">Vui lòng nhập tiêu đề bài viết</span>
        </div>

        <div className="mb-3">
          <label htmlFor="form__add-post-desc" className="block font-medium text-gray-700">
            Mô tả bài viết
          </label>

          <textarea
            rows={10}
            name="form__add-post-desc"
            id="form__add-post-desc"
            className="py-2 px-3 mt-1 border focus:ring-primary focus:border-primary focus:outline-none block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            placeholder="Nhập tiêu đề bài viết"
          ></textarea>
          <span className="text-sm mt-2 text-red-500">Vui lòng nhập tiêu đề bài viết</span>
        </div>

        <fieldset>
          <legend className="text-sm font-semibold leading-6 text-gray-900">Tags</legend>
          <div className="space-y-6">
            <div className="relative flex gap-x-3">
              <div className="flex h-6 items-center">
                <input
                  id="html"
                  name="html"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
              </div>
              <div className="text-sm leading-6">
                <label htmlFor="html" className="font-medium text-gray-900">
                  Html
                </label>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="relative flex gap-x-3">
              <div className="flex h-6 items-center">
                <input
                  id="css"
                  name="css"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
              </div>
              <div className="text-sm leading-6">
                <label htmlFor="css" className="font-medium text-gray-900">
                  Css
                </label>
              </div>
            </div>
          </div>
        </fieldset>

        <button
          type="submit"
          className="mt-5 ml-auto block py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Thêm bài viết
        </button>
      </form>
    </div>
  );
};

export default AddPost;
