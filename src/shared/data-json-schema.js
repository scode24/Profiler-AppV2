const schema = {
  type: "object",
  properties: {
    boxes: {
      type: "object",
      properties: {
        imgspace: {
          $ref: "#/definitions/imgSpaceBoxItem",
        },
        namespace: {
          $ref: "#/definitions/nameSpaceBoxItem",
        },
        about: {
          $ref: "#/definitions/boxItem",
        },
        skills: {
          $ref: "#/definitions/boxItem",
        },
        projects: {
          $ref: "#/definitions/boxItem",
        },
        experiences: {
          $ref: "#/definitions/boxItem",
        },
        achievements: {
          $ref: "#/definitions/boxItem",
        },
        qualification: {
          $ref: "#/definitions/boxItem",
        },
      },
      required: [
        "imgspace",
        "namespace",
        "about",
        "skills",
        "projects",
        "qualification",
      ],
    },
  },
  definitions: {
    imgSpaceBoxItem: {
      type: "object",
      properties: {
        base64Img: { type: "string" },
        config: {
          type: "object",
          properties: {
            style: {
              type: "object",
              properties: {
                fontColor: { type: "string" },
                bgColor: { type: "string" },
              },
            },
            framerAnimation: {
              type: "object",
              properties: {
                onclickAnimation: {
                  type: "object",
                  properties: {
                    initialState: {
                      type: "object",
                      properties: {
                        width: { type: "string" },
                        height: { type: "string" },
                      },
                    },
                    finalState: {
                      type: "object",
                      properties: {
                        width: { type: "string" },
                        height: { type: "string" },
                      },
                    },
                  },
                  required: ["initialState", "finalState"],
                },
              },
              required: ["onclickAnimation"],
            },
          },
          required: ["style", "framerAnimation"],
        },
      },
      required: ["base64Img", "config"],
    },

    nameSpaceBoxItem: {
      type: "object",
      properties: {
        fullName: { type: "string" },
        subTitle: { type: "string" },
        content: { type: ["string", "object", "array"] },
        config: {
          type: "object",
          properties: {
            style: {
              type: "object",
              properties: {
                fontColor: { type: "string" },
                bgColor: { type: "string" },
              },
            },
            framerAnimation: {
              type: "object",
              properties: {
                onclickAnimation: {
                  type: "object",
                  properties: {
                    initialState: {
                      type: "object",
                      properties: {
                        width: { type: "string" },
                        height: { type: "string" },
                      },
                    },
                    finalState: {
                      type: "object",
                      properties: {
                        width: { type: "string" },
                        height: { type: "string" },
                      },
                    },
                  },
                  required: ["initialState", "finalState"],
                },
              },
              required: ["onclickAnimation"],
            },
          },
          required: ["style", "framerAnimation"],
        },
      },
      required: ["fullName", "subTitle", "content", "config"],
    },

    boxItem: {
      type: "object",
      properties: {
        title: { type: "string" },
        content: { type: ["string", "object", "array"] },
        config: {
          type: "object",
          properties: {
            style: {
              type: "object",
              properties: {
                fontColor: { type: "string" },
                bgColor: { type: "string" },
              },
            },
            framerAnimation: {
              type: "object",
              properties: {
                onclickAnimation: {
                  type: "object",
                  properties: {
                    initialState: {
                      type: "object",
                      properties: {
                        width: { type: "string" },
                        height: { type: "string" },
                      },
                    },
                    finalState: {
                      type: "object",
                      properties: {
                        width: { type: "string" },
                        height: { type: "string" },
                      },
                    },
                  },
                  required: ["initialState", "finalState"],
                },
              },
              required: ["onclickAnimation"],
            },
          },
          required: ["style", "framerAnimation"],
        },
      },
      required: ["title", "content", "config"],
    },
  },
  required: ["boxes"],
};

export default schema;
