import PropTypes from 'prop-types';

export default function Input({ title, handleTitle }) {
  return (
    <div>
      <div className="mt-1 relative rounded-md shadow-sm">
        <input
          type="text"
          name="price"
          value={title}
          onChange={handleTitle}
          id="price"
          className="focus:ring-indigo-500 focus:border-indigo-500 block w-full px-4 py-2 sm:text-sm border-gray-300 rounded-md"
          placeholder="Book Title"
        />
      </div>
    </div>
  );
}

Input.propTypes = {
  title: PropTypes.string.isRequired,
  handleTitle: PropTypes.string.isRequired,
};
