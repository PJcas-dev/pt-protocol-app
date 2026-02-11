export const protocol = [
    {
        id: "week-0-1",
        title: "Week 0-1: Acute Phase",
        cover: "/assets/covers/cover_week_0_1_spine_1766979839813.png",
        goal: "Control pain and inflammation, protect the injured disc.",
        description: "Focus on pain relief and gentle movement. Limit painful bending/lifting/twisting early, then gradually reintroduce tolerated movement.",
        educational: [
            "Disc recovery is gradual and varies by person; symptoms often improve over weeks to months.",
            "Avoid positions or motions that clearly worsen leg symptoms during flare-ups.",
            "Use 'active rest' positions like lying on back with knees bent."
        ],
        modalities: [
            {
                id: "ice-therapy",
                name: "Ice Therapy",
                frequency: "15-20 mins, few times daily",
                description: "Apply to low back to reduce acute inflammation."
            },
            {
                id: "tens-acute",
                name: "TENS (Acute)",
                setting: "High-frequency (80-120 Hz) continuous",
                duration: "20-30 mins, 3-4x daily",
                description: "Place electrodes surrounding pain. Use for short-term pain gating."
            }
        ],
        exercises: [
            {
                id: "prone-prop",
                name: "Prone on Elbows",
                type: "Extension",
                reps: "Hold 30-60s",
                sets: "5-10x per day",
                description: "A gentle McKenzie extension exercise that helps centralize pain and reduce leg symptoms.",
                instructions: "Lie face down on a mat. Place forearms on the floor with elbows under shoulders. Gently prop yourself up, allowing your lower back to sag slightly while keeping hips on the floor. Breathe deeply and relax. If leg tingling decreases, you're doing it right. Stop if leg pain increases.",
                image: "/src/assets/exercises/prone-on-elbows.png"
            },
            {
                id: "nerve-glide-lying-basic",
                name: "Gentle Sciatic Nerve Glide (Lying)",
                type: "Mobility",
                reps: "5-10 reps",
                sets: "1-2x daily",
                description: "Gentle nerve mobilization to reduce tingling and improve nerve gliding.",
                instructions: "Lie on your back with both knees bent. Slowly straighten your affected leg toward the ceiling until you feel mild tension (not sharp pain) in your buttock or hamstring. Hold for 1-2 seconds, then bend the knee again. This gentle 'flossing' motion helps the nerve move freely.",
                image: "/src/assets/exercises/nerve-glide.png"
            },
            {
                id: "abdominal-brace",
                name: "Abdominal Brace",
                type: "Core",
                reps: "Hold 5-10s",
                sets: "5-10 reps",
                description: "Activate deep core without moving spine.",
                instructions: "Lie on back. Gently draw in lower abdomen (zipping tight pants). Breathe while holding.",
                image: "/src/assets/exercises/abdominal-brace.png"
            },
            {
                id: "heel-slides",
                name: "Heel Slides",
                type: "Core",
                reps: "10 reps/side",
                sets: "1 set",
                description: "Move legs while maintaining core brace.",
                instructions: "With abs braced, slowly slide one heel out to straighten leg partway, then return.",
                image: "/src/assets/exercises/heel-slides.png"
            },
            {
                id: "short-walks",
                name: "Short Walks",
                type: "Cardio",
                duration: "5-10 mins",
                frequency: "Several times daily",
                description: "Maintain circulation and confidence with movement.",
                instructions: "Walk at an easy pace and stop before symptoms spike. Increase time gradually as tolerated."
            }
        ]
    },
    {
        id: "week-2",
        title: "Week 2: Early Subacute Phase",
        cover: "/assets/covers/cover_week_2_stretch_1766979852750.png",
        goal: "Maintain pain control, improve flexibility, nerve mobility.",
        description: "Acute inflammation subsiding. Introduce gentle stretching.",
        educational: [
            "Frequent short bouts of activity are better than one long session.",
            "TENS can be used before exercise to warm up."
        ],
        modalities: [
            {
                id: "tens-burst",
                name: "TENS (Burst/Modulated)",
                setting: "Low-frequency (2 Hz) or Burst",
                description: "Helps with aching pain and endorphin release."
            },
            {
                id: "heat-therapy",
                name: "Heat Therapy",
                description: "Alternate with ice if muscle spasm is present."
            }
        ],
        exercises: [
            {
                id: "prone-press-up",
                name: "Prone Press-ups (McKenzie)",
                type: "Extension",
                reps: "10 reps",
                sets: "Every 2 hours",
                description: "Dynamic extension exercise that may help centralize symptoms in people with an extension preference.",
                instructions: "Lie face down with hands under your shoulders (like a push-up position). Press your upper body up until arms are straight, but keep your hips and pelvis completely relaxed on the floor. Hold for 1-2 seconds, then lower back down. Repeat rhythmically. Stop if leg pain travels farther down the leg (peripheralizes).",
                image: "/src/assets/exercises/prone-pressup-new.png"
            },
            {
                id: "hamstring-stretch-seated",
                name: "Seated Hamstring Stretch",
                type: "Stretch",
                reps: "Hold 15-20s",
                sets: "3x per leg",
                description: "Relieve pressure on spine.",
                instructions: "Seated, straighten one leg. Keep back straight, lean forward at hips until gentle stretch.",
                image: "/src/assets/exercises/seated-hamstring-stretch.png"
            },
            {
                id: "piriformis-stretch-supine",
                name: "Piriformis Stretch (Supine)",
                type: "Stretch",
                reps: "Hold 20s",
                sets: "3-5x per side",
                description: "Stretches the deep buttock muscle which can irritate the sciatic nerve.",
                instructions: "Lie on your back with knees bent. Cross your affected leg's ankle over your opposite knee (Figure-4 shape). Gently pull your unaffected thigh towards your chest until you feel a stretch in the buttock of the crossed leg. Hold and breathe.",
                image: "/src/assets/exercises/piriformis-stretch.png"
            },
            {
                id: "nerve-glide-pump",
                name: "Nerve Glide with Ankle Pump",
                type: "Mobility",
                reps: "10 reps",
                sets: "Daily",
                description: "Active nerve mobilization to improve flexibility.",
                instructions: "Lie on your back holding your thigh at 90 degrees. Slowly straighten your knee until you feel mild tension. At that point, pump your ankle (toes to nose, then point toes). Lower the leg back down. Do not push into pain.",
                image: "/src/assets/exercises/nerve-glide.png"
            },
            {
                id: "seated-nerve-floss",
                name: "Seated Nerve Floss",
                type: "Mobility",
                reps: "5-10 reps/side",
                description: "Gentle neural mobility drill. Use a smooth, pain-free rhythm.",
                instructions: "Seated slump. Extend leg + Head up. Bend knee + Head down (chin to chest). Rhythmically.",
                image: "/src/assets/exercises/seated-nerve-floss.png"
            },
            {
                id: "cardio-week2",
                name: "Light Cardio (Walk/Bike)",
                type: "Cardio",
                duration: "15-20 mins",
                description: "Walking or Recumbent bike. Stop if leg symptoms increase.",
                image: "/src/assets/exercises/cardio-icon.png"
            }
        ]
    },
    {
        id: "week-3",
        title: "Week 3: Subacute Phase",
        cover: "/assets/covers/cover_week_3_stability_1766979875670.png",
        goal: "Core activation, restore range of motion.",
        description: "Disc scarring over. Start more active rehab.",
        exercises: [
            {
                id: "dead-bug",
                name: "Dead Bug",
                type: "Core",
                reps: "8-10 reps/side",
                sets: "2-3 sets",
                description: "Essential core stability exercise that protects your spine while building deep abdominal strength.",
                instructions: "Lie on your back with arms extended toward ceiling and knees bent at 90°. Engage your core to press lower back into the floor. Slowly lower your right arm overhead while straightening your left leg, hovering just above the ground. Keep your back flat throughout. Return to start and switch sides. Move slowly and controlled.",
                image: "/src/assets/exercises/dead-bug.png"
            },
            {
                id: "glute-bridge",
                name: "Glute Bridges",
                type: "Strength",
                reps: "10-15 reps",
                sets: "2-3 sets",
                description: "Builds strong glutes and hamstrings to support your lower back and reduce disc stress.",
                instructions: "Lie on your back with knees bent and feet flat on the floor, hip-width apart. Engage your core and squeeze your glutes to lift your hips off the floor. Raise until your body forms a straight line from shoulders to knees. Hold for 5 seconds at the top, then slowly lower back down. Focus on using your glutes, not your hamstrings.",
                image: "/src/assets/exercises/glute-bridge.png"
            },
            {
                id: "clamshells",
                name: "Clamshells",
                type: "Strength",
                reps: "10-15 reps/side",
                sets: "1 set",
                description: "Target gluteus medius.",
                instructions: "Lie on side, knees bent. Lift top knee without rotating trunk.",
                image: "/src/assets/exercises/clamshell.png"
            },
            {
                id: "modified-bird-dog",
                name: "Modified Bird-Dog (Standing)",
                type: "Stability",
                reps: "10 reps/side",
                instructions: "Leaning on table (45 deg). Lift one arm or extend one leg back while maintaining neutral spine.",
                image: "/src/assets/exercises/modified-bird-dog.png"
            },
            {
                id: "hip-flexor-stretch",
                name: "Hip Flexor Stretch",
                type: "Stretch",
                reps: "Hold 20s",
                sets: "3x/side",
                instructions: "Kneel on one knee. Lunge gently forward to stretch front of hip.",
                image: "/src/assets/exercises/hip-flexor-stretch.png"
            },
            {
                id: "cardio-week3",
                name: "Cardio (Walk/Bike/Elliptical)",
                type: "Cardio",
                duration: "20-30 mins total",
                description: "Can split into two 15 min sessions.",
                image: "/src/assets/exercises/cardio-icon.png"
            }
        ]
    },
    {
        id: "week-4",
        title: "Week 4: Late Subacute",
        cover: "/assets/covers/cover_week_4_strength_1766979890129.png",
        goal: "Build strength and stability.",
        description: "Transition to early strengthening. Pain should be more localized.",
        exercises: [
            {
                id: "bird-dog-quadruped",
                name: "Bird-Dog (Quadruped)",
                type: "Stability",
                reps: "10 reps/side",
                sets: "2 sets",
                instructions: "Hands and knees. Extend opposite arm and leg. Hold 5s. Keep back flat.",
                image: "/src/assets/exercises/quadruped-bird-dog.png"
            },
            {
                id: "wall-squats",
                name: "Wall Squats / Partial Squats",
                type: "Strength",
                reps: "10-15 reps",
                sets: "2 sets",
                instructions: "Back against wall or free standing. Squat to 45 deg or comfortable depth. Core braced.",
                image: "/src/assets/exercises/wall-squat.png"
            },
            {
                id: "good-mornings-light",
                name: "Good Mornings (Light)",
                type: "Strength",
                reps: "10 reps",
                sets: "2 sets",
                description: "Hip hinge mechanics.",
                instructions: "Stand holding light weight at chest. Hinge at hips (butt back), back straight. Feel hamstring stretch.",
                image: "/src/assets/exercises/good-morning.png"
            },
            {
                id: "nerve-floss-strap",
                name: "Strap-Assisted Nerve Floss",
                type: "Mobility",
                reps: "10-15 pumps",
                sets: "2 sets/side",
                instructions: "Lie on back with strap on foot. Raise leg, pump ankle.",
                image: "/src/assets/exercises/strap-nerve-floss.png"
            },
            {
                id: "single-leg-balance",
                name: "Single Leg Balance",
                type: "Balance",
                reps: "Hold 20-30s",
                sets: "Each side",
                instructions: "Stand on one foot near support.",
                image: "/src/assets/exercises/single-leg-balance.png"
            },
            {
                id: "cardio-week4",
                name: "Cardio Increase",
                type: "Cardio",
                duration: "30 mins",
                description: "Identify any soreness. Swimming is excellent now.",
                image: "/src/assets/exercises/cardio-icon.png"
            }
        ]
    },
    {
        id: "week-5-6",
        title: "Week 5-6: Early Strengthening",
        cover: "/assets/covers/cover_week_5_6_joints_1766979902889.png",
        goal: "Increase core/hip strength, functional movements.",
        description: "Disc outer tear largely healed. Rebuilding endurance.",
        exercises: [
            {
                id: "plank-progression",
                name: "Plank Progression",
                type: "Core",
                reps: "Hold 20-30s",
                sets: "3 reps",
                description: "Progressive core endurance exercise. Start on knees, advance to full plank.",
                instructions: "Begin in forearm plank position - elbows under shoulders, body in a straight line. Start with knees down if needed. Engage your core, squeeze glutes, and keep your spine neutral (don't let hips sag or pike up). Hold the position while breathing normally. Progress to toes when you can maintain perfect form for 30+ seconds on knees.",
                image: "/src/assets/exercises/plank.png"
            },
            {
                id: "side-plank",
                name: "Side Plank",
                type: "Core",
                reps: "Hold 15-20s",
                sets: "Each side",
                instructions: "On forearm and knees/feet. Lift hips.",
                image: "/src/assets/exercises/side-plank.png"
            },
            {
                id: "single-leg-bridge",
                name: "Single-Leg Bridge",
                type: "Strength",
                reps: "5 reps/side (hold 2s)",
                instructions: "At top of bridge, extend one knee.",
                image: "/src/assets/exercises/single-leg-bridge.png"
            },
            {
                id: "weighted-squats",
                name: "Goblet Squats / Lunges",
                type: "Strength",
                reps: "8-10 reps",
                description: "Add light weight (dumbbells).",
                instructions: "Perfect form, neutral spine.",
                image: "/src/assets/exercises/goblet-squat.png"
            },
            {
                id: "rdl-light",
                name: "Romanian Deadlift (Light)",
                type: "Strength",
                reps: "10 reps",
                sets: "2 sets",
                description: "Hip hinge with light weight.",
                instructions: "Slide weights down thighs, hips back. Neutral spine.",
                image: "/src/assets/exercises/romanian-deadlift.png"
            },
            {
                id: "upper-body-supported",
                name: "Supported Upper Body",
                type: "Strength",
                description: "Seated rows, Wall push-ups.",
                instructions: "Keep spine neutral/supported.",
                image: "/src/assets/exercises/wall-pushup.png"
            },
            {
                id: "cardio-week6",
                name: "Cardio Maintenance",
                type: "Cardio",
                duration: "30 mins",
                frequency: "3x/week min",
                description: "Fast walk, cycling, elliptical.",
                image: "/src/assets/exercises/cardio-icon.png"
            }
        ]
    },
    {
        id: "week-7-8",
        title: "Week 7-8: Strengthening Phase II",
        cover: "/assets/covers/cover_week_7_8_functional_1767116626991.png",
        goal: "Functional training, resilience.",
        description: "Pain usually much less. Prepare for moderate impact.",
        exercises: [
            {
                id: "farmers-carry",
                name: "Farmers Carry",
                type: "Core/Functional",
                reps: "Walk 30-50ft",
                sets: "2-3 rounds/side",
                instructions: "Hold weight in one hand (suitcase). Walk keeping torso upright (no leaning).",
                image: "/src/assets/exercises/farmers-carry.png"
            },
            {
                id: "pallof-press",
                name: "Pallof Press",
                type: "Core",
                reps: "10 reps/side (hold 2s)",
                instructions: "Resistance band anti-rotation press.",
                image: "/src/assets/exercises/pallof-press.png"
            },
            {
                id: "advanced-plank",
                name: "Plank Endurance",
                type: "Core",
                reps: "Aim for 40s",
                instructions: "Standard front plank.",
                image: "/src/assets/exercises/plank.png"
            },
            {
                id: "lateral-band-walks",
                name: "Lateral Band Walks",
                type: "Strength",
                reps: "10 steps each way",
                instructions: "Band around thighs/ankles. Half squat position.",
                image: "/src/assets/exercises/lateral-band-walk.png"
            },
            {
                id: "mild-impact-test",
                name: "Mild Impact Test (Optional)",
                type: "Test",
                description: "Only if pain free.",
                instructions: "10 seconds of very light jog or skipping. Monitor reaction."
            },
            {
                id: "functional-lift",
                name: "Functional Lifting Practice",
                type: "Functional",
                reps: "5 reps",
                description: "Pick up box from floor.",
                instructions: "Squat down, neutral spine, brace core, lift with legs.",
                image: "/src/assets/exercises/box-lift.png"
            }
        ]
    },
    {
        id: "week-9-12",
        title: "Week 9-12: Advanced Strengthening",
        cover: "/assets/covers/cover_week_9_12_athletic_1767116641263.png",
        goal: "Regain full strength, return to sport prep.",
        description: "Disc largely healed. Heavier loads with form.",
        exercises: [
            {
                id: "heavy-lifts",
                name: "Squats / Deadlifts (Progressive)",
                type: "Strength",
                reps: "10 reps",
                sets: "3x/week",
                description: "Increase weight gradually. Prioritize form.",
                instructions: "Progress squat/deadlift loads gradually with neutral-spine form. Reduce load if leg symptoms worsen during or after training.",
                image: "/src/assets/exercises/progressive-lift.png"
            },
            {
                id: "plyometrics-entry",
                name: "Light Plyometrics (Week 12+)",
                type: "Power",
                reps: "5-10 reps",
                description: "Only if return to sport planned.",
                instructions: "Small jump squats, skater hops. Soft landing.",
                image: "/src/assets/exercises/jump-squat.png"
            },
            {
                id: "return-to-run",
                name: "Return to Run (Intervals)",
                type: "Cardio",
                description: "1 min jog, 3 min walk x 5.",
                instructions: "Flat surface. Monitor nerve pain.",
                image: "/src/assets/exercises/running.png"
            }
        ]
    },
    {
        id: "week-13-16",
        title: "Week 13-16: Optimization",
        cover: "/assets/covers/cover_week_13_16_optimization_1767116654703.png",
        goal: "Return to full activity, exceed pre-injury fitness.",
        description: "Maintenance and optimization.",
        exercises: [
            {
                id: "max-core",
                name: "Advanced Core",
                type: "Core",
                description: "Side plank 40s+, Front plank 60s+, Dynamic bird-dogs.",
                instructions: "Challenge stability.",
                image: "/src/assets/exercises/plank.png"
            },
            {
                id: "sport-specific",
                name: "Sport Specific Drills",
                type: "Functional",
                description: "Mimic goals (basketball, labor, etc).",
                instructions: "Controlled practice of real-life movements.",
                image: "/src/assets/exercises/agility-drill.png"
            },
            {
                id: "conditioning-max",
                name: "Full Conditioning",
                type: "Cardio",
                description: "150+ mins/week. Intervals.",
                instructions: "Vary intensity.",
                image: "/src/assets/exercises/running.png"
            }
        ]
    }
];
