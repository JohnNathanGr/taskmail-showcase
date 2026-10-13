
/**
 * Simple rule-based intent detection.
 * Standalone example inspired by TaskMail.
 */

function detectIntent(message) {
  if (typeof message !== "string") {
    return "invalid_input";
  }

  const normalizedMessage = message
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  if (normalizedMessage.includes("εκκρεμ")) {
    return "get_pending_tasks";
  }

  if (normalizedMessage.includes("ολοκληρ")) {
    return "get_completed_tasks";
  }

  if (normalizedMessage.includes("επειγ")) {
    return "get_urgent_tasks";
  }

  return "unknown_intent";
}

// Example usage
console.log(detectIntent("Πόσες εκκρεμείς εργασίες έχω?"));
console.log(detectIntent("Δείξε μου τις ολοκληρωμένες εργασίες"));
console.log(detectIntent("Έχω επείγουσες εργασίες;"));
