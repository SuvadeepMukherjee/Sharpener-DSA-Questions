function typesOfBurger(X, Y, N, R) {
  if (N * X > R) {
    return [-1];
  }

  for (
    let premiumBurgers = Math.min(N, Math.floor(R / Y));
    premiumBurgers >= 0;
    premiumBurgers--
  ) {
    let remainingBurgers = N - premiumBurgers;
    let remainingBudget = R - premiumBurgers * Y;

    if (remainingBurgers * X <= remainingBudget) {
      return [remainingBurgers, premiumBurgers];
    }
  }

  return [-1];
}
