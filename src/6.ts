// >>> Types that represent both valid and invalid states are likely to lead to confusing and error-prone code
interface State {
  pageText: string;
  isLoading: boolean;
  error?: string;
}

declare let currentPage: string;
function renderPage(state: State) {
  if (state.error) {
    return `Error! Unable to load ${currentPage}: ${state.error}`;
  } else if (state.isLoading) {
    return `Loading ${currentPage}...`;
  }
  return `<h1>${currentPage}</h1>\n${state.pageText}`;
}

function getUrlForPage(p: string) {
  return "";
}
async function changePage(state: State, newPage: string) {
  state.isLoading = true;
  try {
    const response = await fetch(getUrlForPage(newPage));
    if (!response.ok) {
      throw new Error(`Unable to load ${newPage}: ${response.statusText}`);
    }
    const text = await response.text();
    state.isLoading = false;
    state.pageText = text;
  } catch (e) {
    state.error = "" + e;
  }
}
// forgot to clear state.error in main case
// forgot to set isLoading false in error

// >>> Prefer types that only represent valid states. Even if they are longer or harder to express, they will save time and pain in the end
interface RequestPending {
  state: "pending";
}
interface RequestError {
  state: "error";
  error: string;
}
interface RequestSuccess {
  state: "ok";
  pageText: string;
}
type RequestState = RequestPending | RequestError | RequestSuccess;

interface State {
  currentPage: string;
  requests: { [page: string]: RequestState };
}

function getUrlForPage(p: string) {
  return "";
}
function renderPage(state: State) {
  const { currentPage } = state;
  const requestState = state.requests[currentPage];
  switch (requestState.state) {
    case "pending":
      return `Loading ${currentPage}...`;
    case "error":
      return `Error! Unable to load ${currentPage}: ${requestState.error}`;
    case "ok":
      return `<h1>${currentPage}</h1>\n${requestState.pageText}`;
  }
}

// async function changePage(state: State, newPage: string) {
//   state.requests[newPage] = { state: "pending" };
//   state.currentPage = newPage;
//   try {
//     const response = await fetch(getUrlForPage(newPage));
//     if (!response.ok) {
//       throw new Error(`Unable to load ${newPage}: ${response.statusText}`);
//     }
//     const pageText = await response.text();
//     state.requests[newPage] = { state: "ok", pageText };
//   } catch (e) {
//     state.requests[newPage] = { state: "error", error: "" + e };
//   }
// }

// Air France

interface CockpitControls {
  /** Angle of the left side stick in degrees, 0 = neutral, + = forward */
  leftSideStick: number;
  /** Angle of the right side stick in degrees, 0 = neutral, + = forward */
  rightSideStick: number;
}

// Pilot in control
function getStickSetting(controls: CockpitControls) {
  return controls.leftSideStick;
}

// Assume copilot taken control when pilot stick is at 0
function getStickSetting(controls: CockpitControls) {
  const { leftSideStick, rightSideStick } = controls;
  if (leftSideStick === 0) {
    return rightSideStick;
  }
  return leftSideStick;
}

// Also check for copilot stick at 0
function getStickSetting(controls: CockpitControls) {
  const { leftSideStick, rightSideStick } = controls;
  if (leftSideStick === 0) {
    return rightSideStick;
  } else if (rightSideStick === 0) {
    return leftSideStick;
  }
  // ???
}

// What if both non-zero? When they are around the same position? Average them?
function getStickSetting(controls: CockpitControls) {
  const { leftSideStick, rightSideStick } = controls;
  if (leftSideStick === 0) {
    return rightSideStick;
  } else if (rightSideStick === 0) {
    return leftSideStick;
  }
  if (Math.abs(leftSideStick - rightSideStick) < 5) {
    return (leftSideStick + rightSideStick) / 2;
  }
  // ???
}

// Air France 447
function getStickSetting(controls: CockpitControls) {
  return (controls.leftSideStick + controls.rightSideStick) / 2;
}

// Mechanically linked
interface CockpitControls {
  /** Angle of the stick in degrees, 0 = neutral, + = forward */
  stickAngle: number;
}

function getStickSetting(controls: CockpitControls) {
  return controls.stickAngle;
}
