<template>
  <div class="home">
    <Hero />
    <div class="features-section container">
      <div class="row">
        <h2>What does MentorAI do?</h2>

        <FeatureCard
          v-for="(feature, index) in features"
          :key="index"
          :title="feature.title"
          :description="feature.description"
          :icon="feature.icon"
          :style="getCardStyle(index)"
        />
      </div>
    </div>
    <div class="premium-plans-section container">
      <h2>Choose Your Premium Plan</h2>
      <div class="row">
        <PremiumPlanCard
          v-for="(plan, index) in premiumPlans"
          :key="index"
          :title="plan.title"
          :price="plan.price"
          :features="plan.features"
        />
      </div>
    </div>
    <div class="frequently-asked-questions-section container">
      <FrequentlyAskedQuestions />
    </div>
  </div>
</template>

<script>
import FrequentlyAskedQuestions from "@/components/FrequentlyAskedQuestions.vue";
import Hero from "../components/AppHero.vue";
import FeatureCard from "../components/FeatureCard.vue";
import PremiumPlanCard from "../components/PremiumPlanCard.vue";


export default {
  components: { Hero, FeatureCard ,PremiumPlanCard,FrequentlyAskedQuestions},
  data() {
    return {
      features: [
        { title: "Skill Assessment", description: "Identify gaps in your skillset with AI.", icon: "🧠" },
        { title: "Personalized Learning", description: "Tailored learning paths to boost your career.", icon: "📚" },
        { title: "Mentor Marketplace", description: "Connect with top career mentors.", icon: "🤝" },
      ],
      premiumPlans: [
        {
          title: "Basic Plan",
          price: "799 INR/month",
          features: [
            { name: "Resume Analyzer", included: true },
            { name: "Skill Assessment", included: false },
            { name: "Personalized Learning", included: false },
            { name: "Mentor Marketplace", included: false },
          ]
        },
        {
          title: "Pro Plan",
          price: "999 INR/month",
          features: [
            { name: "Resume Analyzer", included: true },
            { name: "Skill Assessment", included: true },
            { name: "Personalized Learning", included: false },
            { name: "Mentor Marketplace", included: false },
          ]
        },
        {
          title: "Enterprise Plan",
          price: "1299 INR/month",
          features: [
            { name: "Resume Analyzer", included: true },
            { name: "Skill Assessment", included: true },
            { name: "Personalized Learning", included: true },
            { name: "Mentor Marketplace", included: true },
            { name: "Custom Mentorship", included: true },
          ]
        }
      ]
    
    };
  },
  methods: {
    getCardStyle(index) {
      const colors = [
        "linear-gradient(to right, #ff7e5f, #feb47b)",  // Orange-Red Gradient
        "linear-gradient(to right, #00f2ff, #00f2fe)",  // Purple-Blue Gradient
        "linear-gradient(to right, #ffafbd, #ffc3a0)",  // Pink-Orange Gradient
      ];
      return { background: colors[index % colors.length] };
    },
  },
};
</script>

<style scoped>

.premium-plans-section {
  margin: 4rem auto;
  text-align: center;
}

.premium-plans-section h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
}

.features-section {
  margin: 4rem auto;
  text-align: center;
}

.row {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.container {
  padding: 0 1.5rem;
}

.feature-card {
  width: 250px;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  color: white;
  position: relative;
  overflow: hidden;
  text-align: center;
}

.feature-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1;
}

.feature-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
}

/* Text shadow for better readability */
.feature-card h5,
.feature-card p {
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
}

.feature-card h5 {
  font-size: 1.25rem;
  margin-bottom: 1rem;
}

.feature-card p {
  font-size: 1rem;
}

/* Adding an overlay for better contrast */
.feature-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);  /* Dark semi-transparent overlay */
  z-index: 1;
}

.feature-card .icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  z-index: 2;
}
</style>
