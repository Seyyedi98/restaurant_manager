function DeleteButton() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: "rotate(45deg)" }}
    >
      <rect width="24" height="24" rx="12" fill="#EA6A12" />
      <rect
        x="11.1668"
        y="7"
        width="1.66667"
        height="10"
        rx="0.833333"
        fill="white"
      />
      <rect
        x="7"
        y="12.8332"
        width="1.66666"
        height="10"
        rx="0.833332"
        transform="rotate(-90 7 12.8332)"
        fill="white"
      />
    </svg>
  );
}

export default DeleteButton;
