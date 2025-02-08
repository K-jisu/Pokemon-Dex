import Swal from "sweetalert2";

export const overSixCardSwal = () =>
  Swal.fire({
    position: "top-end",
    icon: "warning",
    title: "포켓몬은 6개만 잡을 수 있습니다.",
    showConfirmButton: false,
    timer: 600,
  });

export const sameCardSwal = () =>
  Swal.fire({
    position: "top-end",
    icon: "warning",
    title: "같은 포켓몬은 잡을 수 없습니다.",
    showConfirmButton: false,
    timer: 600,
  });

export const canAddCardSwal = () =>
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "포켓몬을 잡았습니다!",
    showConfirmButton: false,
    timer: 600,
  });

export const removeCardSwal = () =>
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "포켓몬을 놓아줬습니다.",
    showConfirmButton: false,
    timer: 600,
  });
