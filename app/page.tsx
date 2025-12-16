import Image from "next/image";

const featureCards = [
  {
    title: "Realtime Narrative Threads",
    description:
      "Prism identifies narratives in your galleries, clustering related shots and creating share-ready storyboards in seconds.",
    accent: "cyan"
  },
  {
    title: "Contextual Face Intelligence",
    description:
      "Hyper-accurate face signatures with mood tagging keep every collaborator recognized and every moment emotionally indexed.",
    accent: "pink"
  },
  {
    title: "Adaptive Privacy Lanes",
    description:
      "Dual-layer permissions and ephemeral links give you controlled distribution without sacrificing velocity.",
    accent: "yellow"
  }
];

const metrics = [
  { label: "Creators in private beta", value: "1.8k" },
  { label: "Milliseconds to classify", value: "42" },
  { label: "Edge shards secured", value: "9.4M" }
];

const workflowSteps = [
  {
    title: "Edge Capture",
    description: "Uploads land in on-device vaults with zero-knowledge encryption.",
    icon: "📷"
  },
  {
    title: "Prism Process",
    description: "Neural tone-mapping and subject detection craft signature profiles.",
    icon: "🧠"
  },
  {
    title: "Signal Share",
    description: "Curated sets deploy to teams, clients, and social in one push.",
    icon: "⚡"
  }
];

const pricingTiers = [
  {
    name: "Creator",
    cost: "$18",
    cadence: "/mo",
    description: "For independent storytellers pushing weekly drops.",
    perks: ["Unlimited storyboards", "Face ID mood tagging", "5 collaborators"],
    highlight: false
  },
  {
    name: "Collective",
    cost: "$48",
    cadence: "/mo",
    description: "Built for studios shipping in sync with clients worldwide.",
    perks: [
      "Shared asset vaults",
      "Adaptive privacy lanes",
      "24/7 priority support",
      "Analytics pulse dashboard"
    ],
    highlight: true
  },
  {
    name: "Enterprise",
    cost: "Custom",
    cadence: "",
    description: "Compliance-ready deployments and bespoke integrations.",
    perks: ["Self-hosting options", "HIPAA & SOC2-ready", "Dedicated success pod"],
    highlight: false
  }
];

const navItems = ["Product", "Stories", "Integrations", "Pricing", "Updates"];

export default function Home() {
  return (
    <div className="page">
      <div className="noise-overlay" />
      <header className="content" style={{ padding: "1.75rem 0 1.25rem" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1.5rem"
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem"
            }}
          >
            <div
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "14px",
                background:
                  "linear-gradient(135deg, rgba(243, 230, 143, 0.9), rgba(74, 242, 234, 0.9))",
                display: "grid",
                placeItems: "center",
                boxShadow: "0 10px 30px rgba(243, 230, 143, 0.28)"
              }}
            >
              <span style={{ fontSize: "1.5rem", color: "#0e0e0e", fontWeight: 700 }}>P</span>
            </div>
            <div>
              <div
                style={{
                  fontWeight: 600,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  fontSize: "0.8rem",
                  color: "var(--text-secondary)"
                }}
              >
                Prism
              </div>
              <div style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                Intelligent Photo Sharing
              </div>
            </div>
          </div>
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1.8rem",
              fontSize: "0.95rem"
            }}
          >
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                style={{
                  color: "var(--text-secondary)",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  fontSize: "0.75rem"
                }}
              >
                {item}
              </a>
            ))}
          </nav>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <a className="pill-button secondary" style={{ fontSize: "0.85rem" }} href="#">
              Sign In
            </a>
            <a className="pill-button primary" style={{ fontSize: "0.85rem" }} href="#">
              Request Access
            </a>
          </div>
        </div>
      </header>

      <main className="content" style={{ paddingBottom: "8rem" }}>
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            alignItems: "center",
            gap: "3rem",
            padding: "6rem 0 5rem"
          }}
        >
          <div style={{ display: "grid", gap: "1.5rem" }}>
            <div className="badge">
              <span
                style={{
                  display: "inline-block",
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle at 30% 30%, rgba(243,230,143,1), rgba(243,230,143,0.4))",
                  boxShadow: "0 0 12px rgba(243,230,143,0.6)"
                }}
              />
              Signal Online • Beta 1.7
            </div>
            <h1
              style={{
                fontSize: "clamp(2.8rem, 6vw, 4.8rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                fontWeight: 700
              }}
            >
              Share the moments your AI already understands.
            </h1>
            <p
              className="muted"
              style={{
                fontSize: "1.1rem",
                maxWidth: "520px"
              }}
            >
              Prism orchestrates your photo pipelines with neural precision—detecting faces, moods,
              and narrative beats so you can release galleries that feel alive in real time.
            </p>
            <div
              style={{
                display: "flex",
                gap: "1rem",
                flexWrap: "wrap"
              }}
            >
              <a className="pill-button primary" href="#">
                Start building your signal
              </a>
              <a className="pill-button secondary" href="#">
                Explore product decks
              </a>
            </div>
            <div
              style={{
                display: "flex",
                gap: "2.5rem",
                flexWrap: "wrap",
                marginTop: "1rem"
              }}
            >
              {metrics.map((metric) => (
                <div key={metric.label}>
                  <div
                    style={{
                      fontSize: "2rem",
                      fontWeight: 600,
                      letterSpacing: "-0.01em"
                    }}
                  >
                    {metric.value}
                  </div>
                  <div className="muted" style={{ fontSize: "0.85rem", letterSpacing: "0.04em" }}>
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div
            className="glass"
            style={{
              position: "relative",
              padding: "2.8rem",
              borderRadius: "32px",
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.08)"
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: "12%",
                borderRadius: "24px",
                border: "1px solid rgba(255,255,255,0.08)",
                pointerEvents: "none"
              }}
            />
            <div style={{ position: "relative", zIndex: 2, display: "grid", gap: "2rem" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between"
                }}
              >
                <span
                  style={{
                    fontSize: "0.8rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--text-secondary)"
                  }}
                >
                  Live Capture Feed
                </span>
                <span
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "999px",
                    background: "rgba(74, 242, 234, 0.65)",
                    boxShadow: "0 0 12px rgba(74, 242, 234, 0.9)"
                  }}
                />
              </div>

              <div
                style={{
                  display: "grid",
                  gap: "1rem",
                  gridTemplateColumns: "repeat(3, minmax(0, 1fr))"
                }}
              >
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    style={{
                      position: "relative",
                      borderRadius: "18px",
                      overflow: "hidden",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                      background:
                        "linear-gradient(135deg, rgba(243, 230, 143, 0.12), rgba(74, 242, 234, 0.12))"
                    }}
                  >
                    <Image
                      src={`/gallery-${item}.svg`}
                      alt={`Gallery item ${item}`}
                      width={320}
                      height={400}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background:
                          "linear-gradient(180deg, rgba(18,18,18,0) 0%, rgba(18,18,18,0.9) 100%)"
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        bottom: "1rem",
                        left: "1rem",
                        right: "1rem",
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.3rem"
                      }}
                    >
                      <div style={{ fontWeight: 600 }}>Signal {item}</div>
                      <div
                        style={{
                          display: "flex",
                          gap: "0.5rem"
                        }}
                      >
                        <span
                          className="badge"
                          style={{
                            background: "rgba(74, 242, 234, 0.18)",
                            borderColor: "rgba(74, 242, 234, 0.45)",
                            color: "#4af2ea"
                          }}
                        >
                          AI Tagged
                        </span>
                        <span
                          className="badge"
                          style={{
                            background: "rgba(239, 169, 182, 0.2)",
                            borderColor: "rgba(239, 169, 182, 0.4)",
                            color: "#efa9b6"
                          }}
                        >
                          Mood: Elated
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div
                className="glass"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "1.8rem",
                  padding: "1.4rem 1.8rem",
                  background: "rgba(18,18,18,0.72)",
                  borderRadius: "18px",
                  border: "1px solid rgba(74, 242, 234, 0.25)"
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "rgba(74, 242, 234, 0.8)"
                    }}
                  >
                    Prism Process
                  </div>
                  <div style={{ fontWeight: 600 }}>Signal clean. Distribution in 3...2...1.</div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    color: "rgba(74, 242, 234, 0.95)",
                    fontSize: "0.85rem"
                  }}
                >
                  <span
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "999px",
                      background: "rgba(74, 242, 234, 0.8)",
                      boxShadow: "0 0 12px rgba(74, 242, 234, 0.8)"
                    }}
                  />
                  Realtime Sync Online
                </div>
              </div>
            </div>
          </div>
        </section>

        <section style={{ padding: "3rem 0 4rem" }} id="features">
          <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
            {featureCards.map((card) => {
              const accentMap: Record<string, string> = {
                cyan: "#4af2ea",
                pink: "#efa9b6",
                yellow: "#f3e68f"
              };
              return (
                <div
                  key={card.title}
                  className="glass"
                  style={{
                    padding: "2.2rem",
                    borderRadius: "30px",
                    border: `1px solid rgba(255, 255, 255, 0.08)`,
                    background: "rgba(18, 18, 18, 0.78)",
                    display: "grid",
                    gap: "1rem"
                  }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "14px",
                      background: `${accentMap[card.accent]}22`,
                      display: "grid",
                      placeItems: "center",
                      color: accentMap[card.accent],
                      fontSize: "1.4rem"
                    }}
                  >
                    ●
                  </div>
                  <h3 style={{ fontSize: "1.35rem", letterSpacing: "-0.01em" }}>{card.title}</h3>
                  <p className="muted" style={{ fontSize: "0.95rem" }}>
                    {card.description}
                  </p>
                  <a
                    href="#"
                    style={{
                      fontSize: "0.85rem",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: accentMap[card.accent]
                    }}
                  >
                    Dive deeper →
                  </a>
                </div>
              );
            })}
          </div>
        </section>

        <section style={{ padding: "4rem 0" }}>
          <div
            className="glass"
            style={{
              padding: "3rem",
              display: "grid",
              gap: "2.5rem",
              borderRadius: "34px",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              background: "linear-gradient(135deg, rgba(18,18,18,0.85), rgba(18,18,18,0.6))"
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "1rem",
                flexWrap: "wrap"
              }}
            >
              <div>
                <div
                  style={{
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "var(--text-secondary)",
                    fontSize: "0.75rem"
                  }}
                >
                  Signal Workflow
                </div>
                <h2
                  style={{
                    fontSize: "2.1rem",
                    letterSpacing: "-0.01em",
                    marginTop: "0.3rem"
                  }}
                >
                  AI orchestrated photo pipelines built for velocity.
                </h2>
              </div>
              <a className="pill-button secondary" href="#">
                See Automations
              </a>
            </div>
            <div
              className="grid"
              style={{
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))"
              }}
            >
              {workflowSteps.map((step, index) => (
                <div
                  key={step.title}
                  style={{
                    borderRadius: "22px",
                    border: "1px solid rgba(74, 242, 234, 0.25)",
                    background: "rgba(18, 18, 18, 0.65)",
                    padding: "2rem",
                    display: "grid",
                    gap: "0.75rem",
                    position: "relative"
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: "1rem",
                      right: "1rem",
                      fontSize: "0.75rem",
                      color: "rgba(255, 255, 255, 0.2)",
                      letterSpacing: "0.12em"
                    }}
                  >
                    0{index + 1}
                  </div>
                  <div
                    style={{
                      fontSize: "2rem"
                    }}
                  >
                    {step.icon}
                  </div>
                  <h3 style={{ fontSize: "1.2rem" }}>{step.title}</h3>
                  <p className="muted" style={{ fontSize: "0.95rem" }}>
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding: "4rem 0" }}>
          <div
            className="grid"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "3rem",
              alignItems: "center"
            }}
          >
            <div className="glass" style={{ padding: "2.8rem", borderRadius: "30px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  marginBottom: "1.5rem"
                }}
              >
                <div
                  style={{
                    width: "14px",
                    height: "14px",
                    borderRadius: "999px",
                    background: "rgba(239, 169, 182, 0.9)",
                    boxShadow: "0 0 12px rgba(239, 169, 182, 0.8)"
                  }}
                />
                <span
                  style={{
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    fontSize: "0.8rem",
                    color: "rgba(239, 169, 182, 0.9)"
                  }}
                >
                  Face ID Vault
                </span>
              </div>
              <h2
                style={{
                  fontSize: "2rem",
                  letterSpacing: "-0.01em",
                  marginBottom: "1.2rem"
                }}
              >
                Trust biometric precision with collaborative nuance.
              </h2>
              <p className="muted" style={{ marginBottom: "1.5rem" }}>
                Neon pink Face ID pulses confirm every subject with 99.7% accuracy while keeping
                their profiles in privacy-first shards. Prism remembers tone, relationship, and
                approval status so every release is fully-frictionless.
              </p>
              <div
                style={{
                  display: "grid",
                  gap: "1rem"
                }}
              >
                {["Consent & mood pairing", "One-touch approvals", "Context-rich contributor notes"].map(
                  (item) => (
                    <div
                      key={item}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.8rem"
                      }}
                    >
                      <span
                        style={{
                          width: "8px",
                          height: "20px",
                          borderRadius: "999px",
                          background: "linear-gradient(180deg, #efa9b6, rgba(239, 169, 182, 0.2))",
                          boxShadow: "0 8px 18px rgba(239, 169, 182, 0.3)"
                        }}
                      />
                      <span>{item}</span>
                    </div>
                  )
                )}
              </div>
            </div>
            <div
              style={{
                position: "relative",
                borderRadius: "32px",
                overflow: "hidden",
                border: "1px solid rgba(255, 255, 255, 0.08)"
              }}
            >
              <Image
                src="/face-id.svg"
                alt="Prism Face ID interface"
                width={640}
                height={720}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(180deg, rgba(14,14,14,0) 0%, rgba(14,14,14,0.9) 100%)"
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "1.8rem",
                  left: "1.8rem",
                  right: "1.8rem",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}
              >
                <div>
                  <div
                    style={{
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      fontSize: "0.75rem",
                      color: "rgba(239, 169, 182, 0.9)"
                    }}
                  >
                    Face ID Match
                  </div>
                  <div style={{ fontSize: "1.2rem", fontWeight: 600 }}>Ariana Jules • Verified</div>
                </div>
                <div
                  style={{
                    padding: "0.75rem 1.1rem",
                    borderRadius: "999px",
                    background: "rgba(239, 169, 182, 0.2)",
                    border: "1px solid rgba(239, 169, 182, 0.3)",
                    letterSpacing: "0.12em",
                    fontSize: "0.75rem"
                  }}
                >
                  99.7% Match
                </div>
              </div>
            </div>
          </div>
        </section>

        <section style={{ padding: "4rem 0" }}>
          <div
            className="glass"
            style={{
              padding: "3rem",
              borderRadius: "34px",
              display: "grid",
              gap: "2.5rem"
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "1rem",
                flexWrap: "wrap"
              }}
            >
              <div>
                <div
                  style={{
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "var(--text-secondary)",
                    fontSize: "0.75rem"
                  }}
                >
                  Pricing
                </div>
                <h2 style={{ fontSize: "2.1rem", letterSpacing: "-0.01em", marginTop: "0.4rem" }}>
                  Precision pricing for every signal.
                </h2>
              </div>
              <a className="pill-button secondary" href="#">
                Compare plans
              </a>
            </div>
            <div
              className="grid"
              style={{
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: "2rem"
              }}
            >
              {pricingTiers.map((tier) => (
                <div
                  key={tier.name}
                  style={{
                    borderRadius: "28px",
                    padding: "2.4rem 2.2rem",
                    border: tier.highlight
                      ? "1px solid rgba(243, 230, 143, 0.6)"
                      : "1px solid rgba(255,255,255,0.08)",
                    background: tier.highlight
                      ? "linear-gradient(145deg, rgba(243, 230, 143, 0.14), rgba(18,18,18,0.82))"
                      : "rgba(18,18,18,0.7)",
                    display: "grid",
                    gap: "1rem",
                    boxShadow: tier.highlight ? "0 30px 45px rgba(243, 230, 143, 0.14)" : "none"
                  }}
                >
                  <div
                    style={{
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      fontSize: "0.75rem",
                      color: tier.highlight ? "rgba(243, 230, 143, 0.9)" : "var(--text-secondary)"
                    }}
                  >
                    {tier.name}
                  </div>
                  <div style={{ fontSize: "2.4rem", fontWeight: 600 }}>
                    {tier.cost}
                    <span style={{ fontSize: "1rem", color: "var(--text-secondary)", marginLeft: "0.4rem" }}>
                      {tier.cadence}
                    </span>
                  </div>
                  <p className="muted" style={{ fontSize: "0.95rem" }}>
                    {tier.description}
                  </p>
                  <div style={{ display: "grid", gap: "0.75rem" }}>
                    {tier.perks.map((perk) => (
                      <div key={perk} style={{ display: "flex", gap: "0.65rem", alignItems: "center" }}>
                        <span
                          style={{
                            width: "6px",
                            height: "6px",
                            borderRadius: "999px",
                            background: "rgba(243, 230, 143, 0.8)",
                            boxShadow: "0 0 12px rgba(243, 230, 143, 0.6)"
                          }}
                        />
                        <span style={{ fontSize: "0.9rem" }}>{perk}</span>
                      </div>
                    ))}
                  </div>
                  <a
                    className="pill-button secondary"
                    href="#"
                    style={{
                      justifyContent: "center",
                      color: tier.highlight ? "#0e0e0e" : "inherit",
                      background: tier.highlight ? "rgba(243, 230, 143, 0.9)" : "rgba(255,255,255,0.06)",
                      border: tier.highlight ? "1px solid rgba(243, 230, 143, 0.7)" : "1px solid rgba(255,255,255,0.08)"
                    }}
                  >
                    {tier.highlight ? "Start Collective" : "Activate"}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding: "4rem 0" }}>
          <div
            style={{
              display: "grid",
              gap: "2rem",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              alignItems: "stretch"
            }}
          >
            <div
              className="glass"
              style={{
                padding: "2.4rem",
                borderRadius: "28px",
                display: "grid",
                gap: "1.6rem",
                border: "1px solid rgba(255,255,255,0.08)"
              }}
            >
              <div
                style={{
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  fontSize: "0.75rem",
                  color: "var(--text-secondary)"
                }}
              >
                Signal Stories
              </div>
              <blockquote style={{ fontSize: "1.1rem", lineHeight: 1.6 }}>
                “Prism replaces the 7 tools we were duct taping together. Our producers now launch
                interactive galleries minutes after shoots end.”
              </blockquote>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <div
                  style={{
                    width: "42px",
                    height: "42px",
                    borderRadius: "999px",
                    background: "rgba(74, 242, 234, 0.2)",
                    display: "grid",
                    placeItems: "center",
                    fontWeight: 600,
                    color: "#4af2ea"
                  }}
                >
                  K
                </div>
                <div>
                  <div style={{ fontWeight: 600 }}>Kaya Nikhil</div>
                  <div className="muted" style={{ fontSize: "0.85rem" }}>
                    EP • Signal Studios
                  </div>
                </div>
              </div>
            </div>

            <div
              style={{
                position: "relative",
                borderRadius: "28px",
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.08)"
              }}
            >
              <Image
                src="/neon-crowd.svg"
                alt="Prism showcase gallery"
                width={560}
                height={680}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(180deg, rgba(14,14,14,0) 0%, rgba(14,14,14,0.92) 100%)"
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "1.8rem",
                  left: "1.8rem",
                  right: "1.8rem"
                }}
              >
                <div
                  className="badge"
                  style={{
                    background: "rgba(74, 242, 234, 0.24)",
                    borderColor: "rgba(74, 242, 234, 0.5)",
                    color: "#4af2ea"
                  }}
                >
                  Prism Storyboard • Night Sequence
                </div>
                <h3 style={{ marginTop: "1rem", fontSize: "1.6rem" }}>
                  Streaming highlight reels built by the signal graph.
                </h3>
              </div>
            </div>

            <div
              className="glass"
              style={{
                padding: "2.6rem",
                borderRadius: "28px",
                display: "grid",
                gap: "1.2rem",
                border: "1px solid rgba(255,255,255,0.08)"
              }}
            >
              <div
                style={{
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  fontSize: "0.75rem",
                  color: "var(--text-secondary)"
                }}
              >
                Signal Pulse
              </div>
              <div style={{ display: "grid", gap: "1rem" }}>
                {[
                  { label: "Processing nodes live", value: "218" },
                  { label: "Active storyboards", value: "642" },
                  { label: "Latency to delivery", value: "1.4s" }
                ].map((stat) => (
                  <div key={stat.label} style={{ display: "flex", justifyContent: "space-between" }}>
                    <span className="muted" style={{ fontSize: "0.85rem", letterSpacing: "0.05em" }}>
                      {stat.label}
                    </span>
                    <span style={{ fontWeight: 600 }}>{stat.value}</span>
                  </div>
                ))}
              </div>
              <div
                style={{
                  height: "1px",
                  background: "linear-gradient(90deg, transparent, rgba(243, 230, 143, 0.5), transparent)"
                }}
              />
              <p className="muted" style={{ fontSize: "0.9rem" }}>
                The Prism pulse board signals where your galleries are flowing and how quickly your
                teams are reacting. It is your command center for visual velocity.
              </p>
            </div>
          </div>
        </section>

        <section style={{ padding: "4rem 0 6rem" }}>
          <div
            className="glass"
            style={{
              borderRadius: "34px",
              padding: "3rem",
              display: "grid",
              gap: "2rem",
              alignItems: "center",
              justifyItems: "center",
              textAlign: "center",
              background:
                "linear-gradient(135deg, rgba(243, 230, 143, 0.08), rgba(18, 18, 18, 0.92))"
            }}
          >
            <div
              className="badge"
              style={{
                background: "rgba(243, 230, 143, 0.15)",
                borderColor: "rgba(243, 230, 143, 0.4)",
                color: "rgba(243, 230, 143, 0.9)"
              }}
            >
              Limited spots for Beta 1.7
            </div>
            <h2 style={{ fontSize: "2.6rem", letterSpacing: "-0.015em" }}>
              Beam your first Prism signal in under ten minutes.
            </h2>
            <p className="muted" style={{ maxWidth: "540px" }}>
              Drop your archive, let Prism interpret the narrative, and invite collaborators to
              leave real-time reactions. We&apos;ll handle the neural heavy lifting.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
              <a className="pill-button primary" href="#">
                Request an enterprise tour
              </a>
              <a className="pill-button secondary" href="#">
                View the product schema
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer
        className="content"
        style={{
          padding: "2.5rem 0 4rem",
          borderTop: "1px solid rgba(255, 255, 255, 0.08)",
          display: "grid",
          gap: "1.8rem"
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1.5rem"
          }}
        >
          <div>
            <div
              style={{
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                fontSize: "0.75rem",
                color: "var(--text-secondary)"
              }}
            >
              Prism
            </div>
            <p className="muted" style={{ maxWidth: "340px", marginTop: "0.8rem" }}>
              Built in Los Angeles & Berlin. Prism is an intelligent AI photo-sharing platform for
              teams crafting tomorrow&apos;s visual stories.
            </p>
          </div>
          <div style={{ display: "grid", gap: "0.6rem" }}>
            <span className="muted" style={{ fontSize: "0.9rem" }}>
              Follow the signal
            </span>
            <div style={{ display: "flex", gap: "1rem" }}>
              {["Instagram", "Behance", "Dribbble", "X"].map((social) => (
                <a key={social} href="#" style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                  {social}
                </a>
              ))}
            </div>
          </div>
          <div style={{ display: "grid", gap: "0.6rem" }}>
            <span className="muted" style={{ fontSize: "0.9rem" }}>
              Newsletter
            </span>
            <div
              style={{
                display: "flex",
                gap: "0.8rem",
                alignItems: "center"
              }}
            >
              <input
                type="email"
                placeholder="email@prism.network"
                style={{
                  background: "rgba(18, 18, 18, 0.7)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "999px",
                  padding: "0.75rem 1.4rem",
                  color: "var(--text-primary)",
                  fontSize: "0.9rem",
                  width: "220px"
                }}
              />
              <button
                className="pill-button primary"
                style={{ padding: "0.75rem 1.4rem", fontSize: "0.85rem" }}
              >
                Join
              </button>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
            fontSize: "0.8rem",
            letterSpacing: "0.05em",
            color: "var(--text-secondary)"
          }}
        >
          <span>© {new Date().getFullYear()} Prism Signal Labs</span>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Security</a>
            <a href="#">Status</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
